import { Injectable } from '@angular/core';
import type { TodoItem } from './todo-item.model';

@Injectable({
  providedIn: 'root'
})
export class TodoitemsService {

  private todoItems: TodoItem[] = [{
    id: '1',
    title: 'Buy milk',
    description: 'Go to the store and buy milk',
    done: false,
    category: 'family'
  }];
  

  constructor() {
    //TODO: Da sopstare in onVievcontent ocmponenet=????? 
    const tasks = localStorage.getItem('tasks');

    
   }

  getTodoItems(): TodoItem[] {
    return this.todoItems;
  }

  public addTodoItem(todoItem: TodoItem){
    try{
    this.todoItems.push(todoItem);
    console.log('SERVICE LOG: Added todo item with:\n id: ' + todoItem.id + '\n title: ' + todoItem.title + '\n description: ' + todoItem.description + '\n done: ' + todoItem.done + '\n category: ' + todoItem.category);
    } catch (error) {
      console.log('SERVICE LOG: Error adding todo item with:\n id: ' + todoItem.id + '\n title: ' + todoItem.title + '\n description: ' + todoItem.description + '\n done: ' + todoItem.done + '\n category: ' + todoItem.category);
    }
  }

  deleteTodoItem(id: string){
    this.todoItems = this.todoItems.filter((todoItem) => todoItem.id !== id);
  }

  setComplete(id: string){
    const todoItem = this.todoItems.find((todoItem) => todoItem.id === id);
    if (todoItem) {
      todoItem.done = true;
    }
  }




}
