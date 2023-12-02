export class Task {
  id: string;
  name: string;
  description: string | undefined;
  done: boolean;

  constructor(id: string, name: string, description: string | undefined) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.done = false;
  }

  completeTask() {
    this.done = true;
  }
}
