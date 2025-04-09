import { scheduleJob } from "node-schedule";
import { info, error } from "../utils/logger.js";
import { saveTask } from "../models/taskModel.js";

function scheduleTask(task) {
  scheduleJob(new Date(task.executeTime), async () => {
    info(`Executing task ${task.id}`);
    try {
      if (task.taskType === "log") {
        info(`[Task ${task.id}] ${task.taskName}`);
      }
      task.status = "executed";
    } catch (err) {
      error(`Task ${task.id} failed: ${err}`);
      task.status = "failed";
    }
    await saveTask(task);
  });
}

export { scheduleTask };