import { Component, Input } from '@angular/core';
import {TaskComponent} from './task/task.component';
import { NewTaskComponent } from "./new-task/new-task.component";
import { Task } from './task/task.model';
import { TaskService } from './tasks.services';

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
  private tasksService: TaskService;
  /**
   *  ---- istanziamo un servizio tramite Dependency Injection  ----
   * La Dependency Injection è un design pattern che permette di creare oggetti e passarli ad un'altra classe.
   * In questo caso, il costruttore di TasksComponent riceve un'istanza di TaskService.
   * Questo è possibile grazie al decoratore @Injectable({providedIn: 'root'}) presente in TaskService.
   * 
   *  */ 
  constructor(tasksService: TaskService){
    this.tasksService = tasksService;
    

  }


  printUserInfo(){
    //console.log('User id:', this.id);
    console.log('User name:', this.name);
  }

  get selectedUserTasks(){
    return this.tasksService.getUserTasksFromTaskService(this.id);
  }

  /**
   * Questo metodo viene chiamato quando un task viene completato.
   * Sfrutta il metodo filter per rimuovere il task completato dall'array dummyTasks.
   * Il metodo filter restituisce un nuovo array con tutti gli elementi che soddisfano la condizione
   */
  onCompleted(taskId: string){
    this.tasksService.removeTask(taskId);
    
  }

  onStartAddTask(){
    this.isAddingtask = true;

  }

  onCancelAddTask(){
    console.log('Task creation cancelled!');
    this.isAddingtask = false;
  }


}
