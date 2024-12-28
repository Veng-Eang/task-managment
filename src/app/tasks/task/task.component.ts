import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Task } from './task.model';
import { CardComponent } from "../../share/card/card.component";
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task',
  imports: [CardComponent,CardComponent,DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {

@Input({required : true}) task!:Task;
@Output() complate = new EventEmitter<string>();
private tasksService = inject(TasksService);
onCompleteTask() {
  this.tasksService.completeTask(this.task.id)
}
}
