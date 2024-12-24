import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { dummyTasks } from '../dummy-tasks';
import { NewTaskComponent } from "./new-task/new-task.component";

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
  tasks = dummyTasks;

  get selectedUserTasks(){
    return this.tasks.filter((task)=>task.userId == this.userId);
  }

  completeTask(id:string){
      this.tasks = this.tasks.filter((task)=>task.id !== id);
  }
  onStartAddTask(id:string) {
    this.isAddingTask = true;
    console.log("create task for user id : "+id);
  }
  onCancelAddTask() {
    this.isAddingTask = false;
  }
}
