import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { dummyTasks } from '../dummy-tasks';
import { NewTaskComponent } from "./new-task/new-task.component";
import { NewTask } from './task/task.model';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({required:true}) name!:string;
  @Input({required:true}) userId!:string;
  isAddingTask = false;

  constructor(private tasksService:TasksService) {}


  get selectedUserTasks(){
    return this.tasksService.getTasksByUserId(this.userId);
  }

  onStartAddTask(id:string) {
    this.isAddingTask = true;
    console.log("create task for user id : "+id);
  }
  onCancelAddTask() {
    this.isAddingTask = false;
  }
}
