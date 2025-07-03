# Notes Manager Client

![Notes Manager Logo](https://via.placeholder.com/150?text=Notes+Manager) <!-- Placeholder for a logo -->

## Overview

Welcome to the Notes Manager React client! This application allows you to manage notes. Enjoy multi-language support (English, Spanish, Ukrainian) and core features like creating, viewing, updating, and deleting notes. The project includes an end-to-end (e2e) test suite powered by Cypress.

---

## Prerequisites

- **Node.js and npm**: Must be installed on your system.

---

## Getting Started

### Installation

1. **Clone the Repository**  
   Clone the project to your local machine:
   ```bash
   git clone https://github.com/nazarsokal/NotesManager.git
   cd notes-manager.ui
   
2. **Install Dependencies**
  Install the required packages:
  ```bash
  npm install --legacy-peer-deps
  The --legacy-peer-deps flag resolves potential dependency conflicts. This may take a few minutes.
  Install Cypress Binary
  ```bash
  npx cypress install
3. **Running the Application**
  Start the React application:
  ```bash
  npm start

  The app will be available at http://localhost:3000. Open this URL in your browser to start managing notes.

4. **Running the e2e Tests**
  Ensure App is Running
  Keep the React app active at http://localhost:3000.
  Open Cypress Test Runner
  Launch the Cypress GUI:
  ```bash
  npx cypress open
  Select "E2E Testing" and click cypress/e2e/notesManager.cy.js to run the test.

  Test Execution
  The test automates loading notes, switching to Ukrainian.
  A green checkmark indicates success; a red "X" indicates a failure.
  Use the "Debug" button in the Cypress UI to inspect issues if needed.
