import { Inject, Injectable } from "@angular/core";
import { Task } from "./task/task.model";

/**
 * ---- Servizio per la gestione dei task ----
 * Questo servizio è reso diponibile a tutti i componenti dell'applicazione grazie al decoratore @Injectable({providedIn: 'root'}).
 * Questo significa che il servizio è un singleton e viene iniettato in tutti i componenti che lo richiedono.
 */
@Injectable({providedIn: 'root'})
export class TaskService {
   private  dummyTasks = [
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


    constructor(){
        const tasks = localStorage.getItem('tasks') ;

        if(tasks){
            this.dummyTasks = JSON.parse(tasks);
        }
    }

    getUserTasksFromTaskService(userId: string) {

        return this.dummyTasks.filter(task => task.userId === userId);
    }

    setTask(task: Task, id: string) {
        this.dummyTasks.push(
            {
              id: new Date().getTime().toString(),
              userId: id,
              title: task.title,
              summary: task.summary,
              dueDate: task.dueDate
            }
          );
          this.saveTasks();
    }

    removeTask(taskId: string) {
        try{
            this.dummyTasks = this.dummyTasks.filter((task) => task.id != taskId); 
            this.saveTasks();
            console.log('Task completed:', taskId);
          } catch (error){
            console.log('Error:', error);
          }
    }

    private saveTasks(){
        localStorage.setItem('tasks', JSON.stringify(this.dummyTasks));
    }
}