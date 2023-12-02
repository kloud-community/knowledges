import { randomUUID } from "crypto";
import { Task } from "../task";

// TODO: Make tasks persistent
const tasks: Record<string, Task> = {};

export function getTask(id?: string | undefined) {
  if(id === undefined) {
    return Object.values(tasks);
  }

  return tasks[id];
}

export function createTask(task: {
  name: string,
  description?: string | undefined,
}) {
  const id = randomUUID();
  const createdTask = new Task(id, task.name, task.description);

  tasks[id] = createdTask;

  return createdTask;
}

export function completeTask(id: string) {

}