import { Injectable } from '@nestjs/common';
import { Task } from './tasks.controller';

@Injectable()
export class TasksService {
  private tasks: Task[] = [];

  getTasks() {
    return this.tasks;
  }

  createTask(task: Task[]) {
    task.forEach((t) => {
      this.tasks.push(t);
    });
    return 'Taks created';
  }

  deleteTask() {
    return `Task deleted`;
  }

  updateTask() {
    return `Task updated`;
  }

  upgradeTasks() {
    return `Tasks upgraded`;
  }
}
