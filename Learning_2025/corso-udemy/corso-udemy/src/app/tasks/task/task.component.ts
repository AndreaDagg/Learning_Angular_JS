import { Component, EventEmitter, Input, Output, inject} from '@angular/core';
import { DatePipe } from '@angular/common';
import { TaskService } from '../tasks.services';

// Importiamo l'interfaccia del tipo Task dal file task.model.ts
import { type Task } from './task.model';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {

  @Input({required: true}) task!: Task;
  //@Output() taskCompleted = new EventEmitter<String>();
  private taskservice = inject(TaskService);

  onCompleted(id: string){
    this.taskservice.removeTask(id);
  }

}
