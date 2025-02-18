import { Component, EventEmitter, Input, Output } from '@angular/core';

// Importiamo l'interfaccia del tipo Task dal file task.model.ts
import { type Task } from './task.model';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {

  @Input({required: true}) task!: Task;
  @Output() taskCompleted = new EventEmitter<String>();

  onCompleted(id: string){
    this.taskCompleted.emit(id);
  }

}
