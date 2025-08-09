<img width="3188" height="1202" alt="frame (3)" 
src="https://github.com/user-attachments/assets/517ad8e9-ad22-457d-9538-a9e62d137cd7" /> 
# [CODEPULSE] 
�
�
 
## Basic Details 
### Team Name: [TOMATO CHIPS] 
### Team Members - Team Lead: [ADITH RAJEEV] - [COLLEGE OF ENIGINEERING & MANAGEMENT PUNNAPRA] - Member 2: [AGNAS MARIA] - [COLLEGE OF ENIGINEERING & MANAGEMENT PUNNAPRA] 
### Project Description 
[A VSCODE EXTENSION THAT TELLS YOU WHEN YOU ARE TYPING,THINKING AND BEING IDLE.IT DOESNT LET YOU FEEL ALONE-ITS ALWAYS BY YOUR SIDE AND ALSO TELLS YOU IF YOU HAVE ENTERED A FLOW STATE OR ARE YOU WORRIED AND IF YOU HAVE COPIED THE CODE FROM SOME OTHER PLACE!!!] 
### The Problem (that doesn't exist) 
[THE LONELY FEELING THAT NOBODY IS WATCHING AND APPRECIATING WHILE I AM CODING ALONE] 
### The Solution (that nobody asked for) 
[PRESENTING BEFORE YOU-CODEPULSE , THE PULSE OF YOUR CODE.IT LETS YOU SEE YOUR CODE BREATHE] 
## Technical Details 
### Technologies/Components Used 
For Software: - [TEXTSCRIPT] - [VSCODE API] - [VSCODE , NODE.JS , NPM , ESLINT , TYPESCRIPT COMPILER , VSCODE EXTENSION DEBUGGER] 
### Implementation 
For Software: THE IMPLEMENTATION HERE IS BASICALLY A VSCODE EXTENSION WHOSE JOP IS TO MOINTER YOUR CODING ACTIVITY AND REFLECT IT AS A MOOD IN THE STATUS BAR
# Installation 
npm install -g@vscode/vsce # install vsce
vscse package #package extension
code --install-extension codepulse-0.0.1.vsix # install the packaged extension into vscode

# Run 
npm install #install dependencies
npm run compile #compile javascript 
code . #open the project in vs code

### Project Documentation 
For Software: Project Documentation – CodePulse (Software)

1. Project Overview

CodePulse is a Visual Studio Code extension designed to enhance developer self-awareness by tracking coding activity in real-time and displaying the developer’s current “mood” in the VS Code status bar.
The mood is determined by:

Time since the last keystroke.

Number of code errors present.


This tool helps programmers reflect on their coding flow and maintain productivity.


---

2. Features

Keystroke Tracking: Detects how long you’ve been idle.

Error Monitoring: Counts current coding errors in open files.

Dynamic Mood Display: Uses emojis + text to show real-time mood.

Status Bar Integration: Non-intrusive UI at the bottom of VS Code.

Automatic Updates: Refreshes every 2 seconds without user action.



---

3. Technology Stack

Component	Technology Used

Language	TypeScript
Platform/API	Visual Studio Code Extension API
Runtime	Node.js
Package Manager	npm
Linter	ESLint
Build Tool	TypeScript Compiler (tsc)



---

4. Installation

For Development Mode

# Clone the repository
git clone <repository-url>
cd codepulse

# Install dependencies
npm install

# Compile TypeScript
npm run compile

# Open in VS Code
code .

# Press F5 in VS Code to run in Extension Development Host

For Local Installation

# Install VSCE (VS Code Extension Manager)
npm install -g @vscode/vsce

# Package the extension
vsce package

# Install into VS Code
code --install-extension codepulse-0.0.1.vsix


---

5. Usage

1. Open VS Code with the extension installed.


2. Start typing or stay idle — mood changes automatically.


3. View your current mood in the status bar:

⚡ Coding – Actively typing.

😖 Stuck – Idle for > 2 seconds & errors present.

☕ Chilling – Idle for > 2 seconds & no errors.

🤔 Thinking – Default/initial state.





---

6. Implementation Details

Keystroke Monitoring: Uses workspace.onDidChangeTextDocument() to detect typing.

Error Checking: Fetches diagnostics via languages.getDiagnostics() and filters by DiagnosticSeverity.Error.

UI Updates: StatusBarItem text and tooltip are updated on a setInterval() loop every 2000ms.

Iconography: Uses VS Code codicons (e.g., $(coffee), $(error), $(zap)).



---

7. Folder Structure

codepulse/
├── .vscode/               # VS Code configs
├── src/
│   └── extension.ts       # Main extension logic
├── package.json           # Extension manifest + dependencies
├── tsconfig.json          # TypeScript configuration
├── eslint.config.mjs      # Linting rules
├── README.md              # Documentation
└── node_modules/          # Installed dependencies


---

8. Future Enhancements

Mood History Graph: Show mood trends over a coding session.

Notifications: Alert user when idle for too long.

Customizable Thresholds: Let users set idle time before mood changes.

Git Integration: Track mood per commit.

Motivational Quotes: Display tips when idle too long.



---

9. License

MIT License – free to use, modify, and distribute.
# Screenshots (Add at least 3) 
https://drive.google.com/file/d/1-on2vbQWX1CmoVX9zfBa-8tHpBINhVK-/view?usp=sharing
https://drive.google.com/file/d/1T5_aGJbb8MjT0Wb9kQigQTM393cp_MDI/view?usp=sharing
https://drive.google.com/file/d/1aVs919wvp8ewj_vlbqJWDn_FmGU9eY27/view?usp=sharing

### Project Demo 
# Video 
[https://drive.google.com/file/d/1blkBUOaULs2oVEnPe05-G5YnRqxSCKdI/view?usp=sharing] 
THE VIDEO DEMONSTRATES HOW ON RUNNING THE EXTENSION IN A NEW FOLDER, IT SHOWS THAT WE ARE CHILING WHEN WE ARE NOT TYPING CODE AND THEN TYPIBG WHEN WE ARE TYPING AND THAT WE ARE IN A FLOW STATE WHEN YOU ARE CONTINUOUSLY TYPING CODE AND THEN PZASTING CODE WHEN WE PASTE CODE FROM SOME OTHER SOURCE.
## Team Contributions - [ADITH RAJEEV]: [Member 1 – Adith Rajeev	- Designed the project concept and decided on mood-tracking as the main feature.<br>- Implemented keystroke tracking logic using onDidChangeTextDocument.<br>- Wrote mood decision algorithm and emoji mapping.<br>- Integrated error-checking mechanism using languages.getDiagnostics().<br>- Tested the extension on multiple code files to ensure accuracy.
[AGNAS MARIA]: [ Member 2 - Set up the project structure and VS Code extension configuration.<br>- Implemented the Status Bar UI and tooltip updates.<br>- Managed TypeScript compilation and ESLint setup.<br>- Created installation scripts and package.json configuration.<br>- Wrote README and installation guide for end users]
Made with 
❤
 at TinkerHub Useless Projects  
![Static 
Badge](https://img.shields.io/badge/TinkerHub-24?color=%23000000&link=https%3A%2F%2Fw
 ww.tinkerhub.org%2F) 
![Static 
Badge](https://img.shields.io/badge/UselessProjects--25-25?link=https%3A%2F%2Fwww.tinker
 hub.org%2Fevents%2FQ2Q1TQKX6Q%2FUseless%2520Projects)
