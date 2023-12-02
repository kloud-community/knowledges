import { createTask, getTask } from "~/logic/tasks";
import { jsonTask, taskToJSON } from "./type/task";


export const route = [
  [["GET", "/tasks"], handleGetTasks],
  [["POST", "/tasks"], handleCreateTask],
] as const;


function handleGetTasks(req: Request) {
  const id = new URL(req.url).searchParams.get("id");

  const task = getTask(id ?? undefined);
  if(task === undefined) {
    return new Response("", { status: 404 });
  }

  if(Array.isArray(task)) {
    return new Response(JSON.stringify(task.map(taskToJSON)));
  }

  return new Response(JSON.stringify(taskToJSON(task)));
}

async function handleCreateTask(req: Request) {
  const taskData = jsonTask.pick({ name: true, description: true }).safeParse(await req.json());

  if(!taskData.success) {
    return new Response("", { status: 400 });
  }

  return new Response(JSON.stringify(taskToJSON(createTask(taskData.data))));
}