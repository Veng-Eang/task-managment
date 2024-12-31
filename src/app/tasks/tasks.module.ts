import { NgModule } from '@angular/core';
import { TasksComponent } from './tasks.component';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { CommonModule, DatePipe } from '@angular/common';
import { ShareModule } from '../share/share.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [TasksComponent, TaskComponent, NewTaskComponent],
  exports: [TasksComponent],
  imports: [ShareModule,FormsModule,CommonModule],
})
export class TasksModule {}
