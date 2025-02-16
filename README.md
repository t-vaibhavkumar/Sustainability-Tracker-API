# Sustainability Tracker

Sustainability Tracker is a web-based application that allows users to add actions and track them. The project consists of:

- **Backend**: A Node.js Express server handling API requests.
- **Frontend**: An Angular application for user interaction.

## Prerequisites
Ensure you have the following installed:

- **Node.js** (v16 or later)
- **npm** (v8 or later)
- **Angular CLI** (v15 or later)

## Installation
Before running the project, install the required global dependencies:
```sh
npm install -g express angular-cli
```

## Project Structure
```
Sustainability-Tracker-API/
│── sustainability-tracker-backend/   # Node.js Express backend
│── sustainability-tracker-frontend/  # Angular frontend
```

## Backend Setup (Node.js Express)
1. Navigate to the backend directory:
   ```sh
   cd sustainability-tracker-backend
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Start the backend server:
   ```sh
   npm run dev
   ```
   The server will start at `http://localhost:4000/` (or as per your `.env` file).

## Frontend Setup (Angular)
1. Navigate to the frontend directory:
   ```sh
   cd sustainability-tracker-frontend
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Start the Angular development server:
   ```sh
   ng serve
   ```
   The frontend will be accessible at `http://localhost:4200/`.

## API Endpoints
| Method | Endpoint       | Description |
|--------|---------------|-------------|
| GET    | `/actions`     | Fetch all actions |
| POST   | `/actions`     | Add a new action |

## Usage
1. Open `http://localhost:4200/` in your browser.
2. Click **"Add New Action"** to add an action.
3. Click **"View All Actions"** to see added actions.
4. The actions are stored and retrieved via the backend.

## License
This project is licensed under the MIT License.

---
### Author
**Vaibhav Kumar**

