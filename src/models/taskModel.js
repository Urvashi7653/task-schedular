import redisClient from "../config/redis.js";

async function saveTask(task) {
  await redisClient.set(`task:${task.id}`, JSON.stringify(task));
}

async function getTask(id) {
  const data = await redisClient.get(`task:${id}`);
  return data ? JSON.parse(data) : null;
}

async function getAllTasks() {
  const keys = await redisClient.keys("task:*");
  const tasks = [];
  for (const key of keys) {
    const task = await redisClient.get(key);
    tasks.push(JSON.parse(task));
  }
  return tasks;
}

async function deleteTask(id) {
  await redisClient.del(`task:${id}`);
}

export  { saveTask, getTask, getAllTasks, deleteTask };