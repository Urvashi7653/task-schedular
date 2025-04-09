#  Node.js + Redis Task Scheduler

This project is a simple task scheduling system built using **Node.js**, **Redis**, and **JWT Authentication**. It allows users to schedule tasks with a delay and monitor their status.

---

## Features

- JWT-based Authentication
- Schedule tasks with custom delays
- Background task processing
- View, Cancel tasks
- Redis-based storage and queue
- RESTful API endpoints
- Dockerized setup

---

## Getting Started

### Prerequisites:
- Node.js 18+
- Redis


### Install & Run After Extracting Zip folder
After extracting the files from zipped folders:
(make sure redis is also running)
```bash
cd task-scheduler
npm install
npm start
```

### Run with Docker
```bash
docker build -t task-scheduler .
docker run -p 3000:3000 --env-file .env task-scheduler
```

---

## Authentication
Login to get a JWT token:
```http
POST /login
Body: { "username": "yourname" }
```
Use `Bearer <token>` in headers for secured routes.

---

## API Endpoints
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST   | /api/tasks | Schedule a new task |
| GET    | /api/tasks | View all tasks |
| GET    | /api/tasks/:id | View task by ID |
| DELETE | /api/tasks/:id | Cancel task |

## Testing
Import task-scheduler-api-postman_collection.json from src/postman and test api's. Screenshots are added in screenshots folder.

### Request Body (POST /api/tasks)
```json
{
  "taskName": "Reminder Email",
  "delaySeconds": 60,
  "taskType": "log"
}
```

---

## Folder Structure
```
src/
├── config/         # Redis connection
├── controllers/    # API logic
├── middleware/     # JWT auth
├── models/         # Redis task methods
├── routes/         # API routes
├── scheduler/      # node-schedule logic
├── utils/          # logger setup
├── app.js          # Express setup
└── server.js       # Server entrypoint
```

---


Made with ❤️ using Node.js + Redis.