import {
  Body,
  Controller,
  Delete,
  Get,
  Patch,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { TasksService } from './tasks.service';

export interface Task {
  title: string;
  status: boolean;
}

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get('/')
  getTasks(@Query() query: { title?: string; status?: string }): Task[] {
    console.log(query);
    let tasks = this.tasksService.getTasks();
    if (query.title) {
      tasks = tasks.filter(
        (task) => query.title && task.title.includes(query.title),
      );
    }
    if (query.status) {
      const booleanStatus = query.status === 'true';
      tasks = tasks.filter(
        (task) => query.status && task.status === booleanStatus,
      );
    }
    return tasks;
  }

  @Post('/')
  createTask(@Body() tasks: Array<{ title: string; status: boolean }>) {
    return this.tasksService.createTask(tasks);
  }

  @Delete('/')
  deleteTask() {
    return this.tasksService.deleteTask();
  }

  @Put('/')
  updateTask() {
    return this.tasksService.updateTask();
  }

  @Patch('/')
  upgradeTasks() {
    return this.tasksService.upgradeTasks();
  }
}
