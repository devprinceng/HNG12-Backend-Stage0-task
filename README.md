# HNG12 Backend Stage 0 Task

## Description
This project is a simple PUBLIC API that returns basic user data which includes:

- The **registered email** used for HNG12 
- The **current datetime** in ISO 8601 format (UTC)  
- The **GitHub repository URL** of this project  

## **Technology Stack**  

- **JavaScript (Node.js)**
- Deployed on Render

---

## Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation
1. Clone the repository:
    ```bash
    git clone https://github.com/devprinceng/HNG12-Backend-Stage0-task.git
    ```
2. Navigate to the project directory:
    ```bash
    cd HNG12-Backend-Stage0-task
    ```
3.  **Create a `.env` file and add your PORT NUMBER.**
    ```env
    PORT=3000
    ```
4. Install the dependencies:
    ```bash
    npm install
    ```

### Running the Project Locally
1. Start the server:
    ```bash
    npm start
    ```
2. The server will be running on `http://localhost:3000`.

## API Documentation

### **Base URL:**  
```
https://hng12-backend-stage0-task.onrender.com/
```

### Endpoint
- **URL:** `/`
- **Method:** `GET`
- **Response Format:** `application/json`

### Response
```json
{
  "email": "devprinceng@gmail.com",
  "current_time": "2025-01-31T06:36:45.429Z",
  "github_url": "https://github.com/devprinceng/HNG12-Backend-Stage0-task"
}
```

### Example Usage
```bash
curl -X GET https://hng12-backend-stage0-task.onrender.com/
```

### Example Response
```json
{
  "email": "devprinceng@gmail.com",
  "current_time": "2025-01-31T06:36:45.429Z",
  "repo_link": "https://github.com/devprinceng/HNG12-Backend-Stage0-task"
}
```

## Backlink

[Hire NodeJS Developers](https://hng.tech/hire/nodejs-developers)
