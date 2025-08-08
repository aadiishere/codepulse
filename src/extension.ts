import * as vscode from 'vscode';
import { setInterval } from 'timers';

// This function is called when your extension is activated
export function activate(context: vscode.ExtensionContext) {

    console.log('Congratulations, your extension "codepulse" is now active!');

    // --- SETUP ---
    const statusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left, 100);
    statusBarItem.tooltip = "Your development vibe is being monitored...";
    statusBarItem.show();

    // --- STATE & METRICS ---
    // Using an object to keep track of all our metrics
    const metrics = {
        keystrokeCount: 0,
        backspaceCount: 0,
        lastKeystrokeTime: Date.now(),
        lastMood: ""
    };

    // --- EVENT LISTENER ---
    vscode.workspace.onDidChangeTextDocument(event => {
        // This event fires for every change, including undo/redo, typing, and deleting.
        const change = event.contentChanges[0];
        if (!change) return;

        // Check for backspaces/deletions
        if (change.text === "") {
            metrics.backspaceCount += change.rangeLength;
        } 
        // Check for typing new characters
        else {
            metrics.keystrokeCount += change.text.length;
        }
        
        // Update the timestamp on any activity
        metrics.lastKeystrokeTime = Date.now();
    });

    // --- THE MOOD ENGINE (runs every 3 seconds) ---
    setInterval(() => {
        const now = Date.now();
        const diagnostics = vscode.languages.getDiagnostics();
        const errorCount = diagnostics.filter(d => d.severity === 0).length; // 0 means 'Error'
        const timeSinceLastKeystroke = (now - metrics.lastKeystrokeTime) / 1000; // in seconds

        let mood = "🤔 Thinking";
        let icon = "$(thought-bubble)";

        // If you haven't typed in a while...
        if (timeSinceLastKeystroke > 2) {
            if (errorCount > 0) {
                mood = "😵 Stuck";
                icon = "$(error)";
            } else {
                mood = "😌 Chilling";
                icon = "$(coffee)";
            }
        } 
        // If you are actively coding...
        else {
            if (metrics.backspaceCount > metrics.keystrokeCount && metrics.backspaceCount > 5) {
                mood = "✂️ Refactoring";
                icon = "$(scissors)";
            }
            else if (metrics.keystrokeCount > 50) {
                mood = "✨ Pasting Code";
                icon = "$(clippy)";
            }
            else if (metrics.keystrokeCount > 15) {
                if (errorCount > 2) {
                    mood = "🔥 Frantic";
                    icon = "$(flame)";
                } else {
                    mood = "🌊 In The Zone";
                    icon = "$(zap)";
                }
            } else {
                mood = "📝 Typing";
                icon = "$(pencil)";
            }
        }
        
        // Update the UI only if the mood has changed
        if (mood !== metrics.lastMood) {
            statusBarItem.text = `${icon} ${mood}`;
            metrics.lastMood = mood;
        }

        // Reset counters for the next interval
        metrics.keystrokeCount = 0;
        metrics.backspaceCount = 0;

    }, 1000); // Check every 3 seconds
}

// This function is called when your extension is deactivated
export function deactivate() {}