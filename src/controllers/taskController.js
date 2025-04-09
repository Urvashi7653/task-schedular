import { v4 as uuidv4 } from "uuid";
import { saveTask, getTask, getAllTasks, deleteTask } from "../models/taskModel.js";
import { scheduleTask } from "../scheduler/scheduler.js";

export async function createTask(req, res) {
  const { taskName, delaySeconds, taskType } = req.body;
  const taskId = uuidv4();
  const executeTime = Date.now() + delaySeconds * 1000;
  const task = {
    id: taskId,
    taskName,
    taskType,
    executeTime,
    status: "pending",
  };
  await saveTask(task);
  scheduleTask(task);
  res.status(201).json({ message: "Task scheduled", taskId });
}

export async function getTasks(req, res) {
  const tasks = await getAllTasks();
  res.json(tasks);
}

export async function getTaskById(req, res) {
  const task = await getTask(req.params.id);
  if (!task) return res.status(404).json({ message: "Task not found" });
  res.json(task);
}

export async function deleteTaskById(req, res) {
  const task = await getTask(req.params.id);
  if (!task) return res.status(404).json({ message: "Task not found" });
  await deleteTask(req.params.id);
  res.json({ message: "Task cancelled" });
}
