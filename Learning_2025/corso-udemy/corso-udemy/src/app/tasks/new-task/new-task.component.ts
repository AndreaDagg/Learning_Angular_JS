import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { type Task } from '../task/task.model';
import { TaskService } from '../tasks.services';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Input({required: true}) userId!: string;
  /**
   * In questo caso l'evento non ha parametri, quindi il tipo di EventEmitter è void.
   */
  @Output() onCanceledEvent = new EventEmitter<void>();
  //@Output() onSubmittedEvent = new EventEmitter<Task>();

  /**
   * Utilizziamo il TWO-WAY DATA BINDING per leggere i valori inseriti dall'utente.
   * Attraverso l'attributo ngModel nel Template HTML
   */
  enteredTitle = '';
  enteredSummary = '';
  enteredDate = ''; 
  // Utilizziamo il decoratore inject per iniettare il servizio TaskService al posto
  // EventEmitter
  private taskService = inject(TaskService);
  
  onCanceled(){
    //console.log('Task creation cancelled!');
    this.onCanceledEvent.emit();
  }

  onSubmit(){
    this.taskService.setTask({
      id: new Date().getTime().toString(),
      userId: this.userId,
      title: this.enteredTitle,
      summary: this.enteredSummary,
      dueDate: this.enteredDate
    }, this.userId);
    this.onCanceledEvent.emit();
  }
}