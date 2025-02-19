import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { TasksComponent } from './tasks.component';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { SharedModule } from '../shared/card/shared.module';
import { FormsModule } from '@angular/forms';

@NgModule({
    // Dichiariamo questi componenti come parte del modulo TasksModule in quanto sono i componenti che vogliamo utilizzare all'interno del modulo
  declarations: [TasksComponent, TaskComponent, NewTaskComponent],
  imports: [SharedModule, DatePipe, CommonModule, FormsModule],
    // Rendiamo disponibile il componente TasksComponent all'esterno del modulo in quanto è l'unico componente che vogliamo utilizzare all'esterno
  exports: [TasksComponent],
})
export class TasksModule {}
