# Inventory System (Angular 17)

This is a sample Inventory System built with Angular 17. The project demonstrates a component based architecture, lazy loaded modules, services, reactive forms and Material design.

## Features

- Dashboard with chart summarizing inventory quantities
- Inventory list view with search and CRUD actions
- Item detail form for creating and editing items
- Responsive layout using Angular Material
- Login page with forgot password form
- Lazy loaded feature modules
- Data service using RxJS and HttpClient

## Folder Structure

```
├── angular.json
├── package.json
├── src
│   ├── index.html
│   ├── main.ts
│   ├── styles.scss
│   ├── assets
│   │   └── data
│   │       └── inventory.json
│   ├── environments
│   │   ├── environment.ts
│   │   └── environment.prod.ts
│   └── app
│       ├── app.component.*
│       ├── app.module.ts
│       ├── app.routes.ts
│       └── features
│           ├── dashboard
│           ├── inventory
│           └── auth


```

## Setup

1. Install Angular CLI (requires Node.js):
   ```bash
   npm install -g @angular/cli
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   ng serve
   ```
4. Navigate to `http://localhost:4200/` in your browser.

## Screenshots

Add screenshots of the dashboard and inventory pages here once the app is running.

## Notes

This repository contains only the source code. Dependencies must be installed using `npm install` before running or testing the application.
