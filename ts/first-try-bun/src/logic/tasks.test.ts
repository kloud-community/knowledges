import { describe, expect, it, test } from "bun:test";
import { createTask, getTask } from "./tasks";

describe("Task management", () => {
  it("should able to create tasks with name and description, then be able to retrieve later", () => {
    const createdTask = createTask({ name: "Name", description: "Description" });
    const gotTask = getTask(createdTask.id);

    if(Array.isArray(gotTask)) {
      expect(gotTask).not.toBeArray();
      throw new Error();
    }

    expect(createdTask).toStrictEqual(gotTask);
  });

  it("should able to retrieve all tasks if no ID is specified", () => {
    const createdTasks = Array.from({ length: 10 }).map((_) => createTask({ name: "Name", description: "Description" }));
    const gotAllTasks = getTask();

    if(!Array.isArray(gotAllTasks)) {
      expect(gotAllTasks).toBeArray();
      throw new Error();
    }

    expect(gotAllTasks.length).toBeGreaterThanOrEqual(10);
    for(const task of createdTasks) {
      expect(gotAllTasks.find(({ id }) => id === task.id)).not.toBeUndefined();
    }
  });
})
