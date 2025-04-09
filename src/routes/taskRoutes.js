import { Router } from "express";
const router = Router();
import { createTask, getTasks, getTaskById, deleteTaskById } from "../controllers/taskController.js";
import authenticateToken from "../middleware/authMiddleware.js";

router.post("/tasks", authenticateToken, createTask);
router.get("/tasks", authenticateToken, getTasks);
router.get("/tasks/:id", authenticateToken, getTaskById);
router.delete("/tasks/:id", authenticateToken, deleteTaskById);

export default router;