import { Task } from "~/task";
import { z } from "zod";

export const jsonTask = z.object({
  id: z.string().uuid(),
  name: z.string(),
  description: z.string().optional(),
  done: z.boolean(),
})
export type JsonTask = z.infer<typeof jsonTask>;

export function taskToJSON(task: Task): JsonTask {
  return {
    id: task.id,
    done: task.done,
    name: task.name,
    description: task.description,
  }
}