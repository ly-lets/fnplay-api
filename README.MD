# fnplay-api

A simple API server built with Express.js and TypeScript.

## Table of Contents

- [fnplay-api](#fnplay-api)
  - [Table of Contents](#table-of-contents)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
  - [API Endpoints](#api-endpoints)
    - [Authentication](#authentication)
    - [Games](#games)
    - [Heartbeat](#heartbeat)
  - [Common Issues and Troubleshooting](#common-issues-and-troubleshooting)
  - [License](#license)
---

## Getting Started

### Prerequisites

Ensure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (v20 or later recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Installation

1. Install dependencies:
   ```bash
   npm install
   ```

2. Build the project, output to `/dist`:
    ```bash
   npm run build
   ```

3. Start the server:
   ```bash
   npm start
   ```
4. Alternatively, for development mode with live reload:
   ```bash
   npm run dev
   ```
5. The server will run on http://localhost:3000.

## API Endpoints
### Authentication

- POST `/api/v1/login`: Login with username and password.
- GET `/api/v1/verify-session`: Verify if a user having active server session.
- POST `/api/v1/logout`: Logout the current user.

### Games
- GET `/api/v1/games`: Retrieve all games.
- GET `/api/v1/providers`: Retrieve all providers.
- GET `/api/v1/groups`: Retrieve all groups.

### Heartbeat
- GET `/api/heartbeat`: Check if the server is running.


## Common Issues and Troubleshooting
1. Server is not accessible
   1. Cause: The server might not be running.
   2. Solution: Ensure the server is started using npm run dev or npm start.
2. Port 3000 is already in use
   1. Cause: Another application is using port 3000.
   2. Solution: Stop the other application or change the port in src/server.ts.
3. Cannot find module error
   1. Cause: Dependencies are not installed.
   2. Solution: Run npm install to install all required dependencies.
4. TypeScript compilation errors
   1. Cause: TypeScript configuration issues or code errors.
   2. Solution: Check the tsconfig.json file and ensure the code adheres to TypeScript rules. Run npm run build to see detailed errors.
5. Session not working
   1. Cause: Missing or invalid session configuration.
   2. Solution: Ensure the express-session middleware is properly configured in src/server.ts.


## License
This project is licensed under the MIT License.