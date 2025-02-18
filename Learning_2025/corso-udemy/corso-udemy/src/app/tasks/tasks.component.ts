import { Component, Input } from '@angular/core';
import {TaskComponent} from './task/task.component';
import { NewTaskComponent } from "./new-task/new-task.component";
import { Task } from './task/task.model';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TasksComponent, TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  

  //@Input({ required: true }) id!: string;
  @Input({ required: true }) id!: string;
  @Input({ required: true }) name!: string;
  isAddingtask: boolean = false; 

  dummyTasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary:
        'Learn all the basic and advanced features of Angular & how to apply them.',
      dueDate: '2025-12-31',
    },
    {
      id: 't2',
      userId: 'u3',
      title: 'Build first prototype',
      summary: 'Build a first prototype of the online shop website',
      dueDate: '2024-05-31',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Prepare issue template',
      summary:
        'Prepare and describe an issue template which will help with project management',
      dueDate: '2024-06-15',
    },
  ]

  printUserInfo(){
    //console.log('User id:', this.id);
    console.log('User name:', this.name);
  }

  get selectedUserTasks(){
    return this.dummyTasks.filter(task => task.userId === this.id);
  }

  /**
   * Questo metodo viene chiamato quando un task viene completato.
   * Sfrutta il metodo filter per rimuovere il task completato dall'array dummyTasks.
   * Il metodo filter restituisce un nuovo array con tutti gli elementi che soddisfano la condizione
   */
  onCompleted(taskId: string){
    try{
      this.dummyTasks = this.dummyTasks.filter((task) => task.id != taskId); 
      console.log('Task completed:', taskId);
    } catch (error){
      console.log('Error:', error);
    }
  }

  onStartAddTask(){
    this.isAddingtask = true;

  }

  onCancelAddTask(){
    console.log('Task creation cancelled!');
    this.isAddingtask = false;
  }

  onAddTask(task: Task){
    /**
     * l'unico valore che si prende da qui è l'userId perché è passato in input
     */
    this.dummyTasks.push(
      {
        id: task.id,
        userId: this.id,
        title: task.title,
        summary: task.summary,
        dueDate: task.dueDate
      }
    );
    this.isAddingtask = false;
  }


}
