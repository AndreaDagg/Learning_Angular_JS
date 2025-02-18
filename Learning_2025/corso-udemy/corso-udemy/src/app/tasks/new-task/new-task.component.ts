import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { type Task } from '../task/task.model';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {

  /**
   * In questo caso l'evento non ha parametri, quindi il tipo di EventEmitter è void.
   */
  @Output() onCanceledEvent = new EventEmitter<void>();
  @Output() onSubmittedEvent = new EventEmitter<Task>();

  /**
   * Utilizziamo il TWO-WAY DATA BINDING per leggere i valori inseriti dall'utente.
   * Attraverso l'attributo ngModel nel Template HTML
   */
  enteredTitle = '';
  enteredSummary = '';
  enteredDate = ''; 
  
  onCanceled(){
    //console.log('Task creation cancelled!');
    this.onCanceledEvent.emit();
  }

  onSubmit(){
    this.onSubmittedEvent.emit({
      id: new Date().getTime().toString(),
      userId: Math.random().toString(),
      title: this.enteredTitle,
      summary: this.enteredSummary,
      dueDate: this.enteredDate
    });
  }
}
