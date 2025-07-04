# Notes Manager

## Overview

Welcome to the Notes Manager full-stack project! This includes a React client and ASP.NET Core Web API backend. It supports multi-language note management (English, Spanish, Ukrainian), including features like creating, viewing, updating, and deleting notes. The project also includes end-to-end tests using Cypress.

---

## Prerequisites

- **Node.js and npm** (for client)
- **.NET 7 SDK or newer** (for API)
- **Docker** (for running SQL Server database)
- **EF Core CLI** (optional, for DB migrations)

---
## Backend Setup (ASP.NET Core API)

### 1. Clone the Repository

```bash
git clone https://github.com/nazarsokal/NotesManager.git
cd NotesManager.API
```
### 2. Restore Dependencies

```bash
dotnet restore
```

---

## SQL Server Setup with Docker

To run db in Docker:

```bash
docker run -e "ACCEPT_EULA=Y" -e "SA_PASSWORD=Very123StrongPass" -p 1433:1433 --name test-asigment-sqlserver -d mcr.microsoft.com/mssql/server:2022-latest
```

- Username: `sa`  
- Password: `Very123StrongPass`  
- Port: `1433`

---

## Configure Connection String

In `appsettings.json` of the API project, update your connection string like this:

```json
"ConnectionStrings": {
  "DefaultConnection": "Server=localhost,1433;Database=NotesManagerDb;User Id=sa;Password=Very123StrongPass;TrustServerCertificate=True;"
}
```
---

## Apply EF Core Migrations

To generate a new migration:

```bash
dotnet ef migrations add InitialCreate --output-dir Infrastructure/Migrations
```

To create the database:
```bash
dotnet ef database update
```

---

## Run the API

Start the API:

```bash
dotnet run
```
---
## Frontend Setup (React)

### 1. Unzip and Open the API Project

Unzip and navigate to the API folder:
```bash
cd notes-manager.ui
```
### 2. Install Dependencies

```bash
npm install --legacy-peer-deps
```

> The `--legacy-peer-deps` flag resolves potential dependency conflicts.

### 3. Install Cypress (E2E)

```bash
npx cypress install
```

### 4. Run React App

```bash
npm start
```

Visit: [http://localhost:3000](http://localhost:3000)

---

## Running the e2e Tests

### 1. Ensure App is Running

Keep the React app active at `http://localhost:3000`.

### 2. Open Cypress

```bash
npx cypress open
```

Choose **E2E Testing** → Run `cypress/e2e/notesManager.cy.js`

---



## Summary

- **Frontend:** React + Cypress
- **Backend:** ASP.NET Core Web API
- **Database:** SQL Server running via Docker

---
