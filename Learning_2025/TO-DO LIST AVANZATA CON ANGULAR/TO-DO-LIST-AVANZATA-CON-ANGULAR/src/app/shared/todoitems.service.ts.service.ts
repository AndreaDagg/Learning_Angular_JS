import { EventEmitter, Injectable, Output, signal } from '@angular/core';
import type { TodoItem } from './todo-item.model';

@Injectable({
  providedIn: 'root',
})
export class TodoitemsService {
  //private todoItems: TodoItem[] = [];
  todoItems = signal<TodoItem[]>([]);

  @Output() todoItemsListModify = new EventEmitter<void>();

  constructor() {

    const tasks = localStorage.getItem('todo_db');
    if (tasks) {
      this.todoItems.set(JSON.parse(tasks));
    }
  }

  getTodoItems(): TodoItem[] {
    return this.todoItems();
  }

  public addTodoItem(todoItem: TodoItem) {
    try {
      this.todoItems.update( listItems => [ ...listItems, todoItem ] );
      this.saveTodoItems();

      console.log(
        'SERVICE LOG: Added todo item with:\n id: ' +
          todoItem.id +
          '\n title: ' +
          todoItem.title +
          '\n description: ' +
          todoItem.description +
          '\n done: ' +
          todoItem.done +
          '\n category: ' +
          todoItem.category
      );
    } catch (error) {
      console.log(
        'SERVICE LOG: Error adding todo item with:\n id: ' +
          todoItem.id +
          '\n title: ' +
          todoItem.title 
      );
    }
  }

  deleteTodoItem(id: string) {
    try {
      //this.todoItems = this.todoItems.filter((todoItem) => todoItem.id !== id);
      this.todoItems.update( listItems => listItems.filter((todoItem) => todoItem.id !== id) );
      console.log('SERVICE LOG: Deleted todo item with id: ' + id);
      this.saveTodoItems();
    } catch (error) {
      console.log('SERVICE LOG: Error deleting todo item with id: ' + id);
    }
  }

  setComplete(id: string) {
    //const todoItem = this.todoItems.find((todoItem) => todoItem.id === id);
    const todoItem = this.todoItems().find((todoItem) => todoItem.id === id);
    if (todoItem) {
      todoItem.done = true;
    }
  }

  setIfDone(id: string, done: boolean) {
    //const todoItem = this.todoItems.find((todoItem) => todoItem.id === id);
    const todoItem = this.todoItems().find((todoItem) => todoItem.id === id);
    if (todoItem) {
      todoItem.done = done;
      console.log('SERVICE LOG: Set todo item with id: ' + id + ' to done: ' + done);
      this.saveTodoItems();
    } else {
      console.log('SERVICE LOG: Could not find todo item with id: ' + id);
    }
    
  }

  saveTodoItems() {
    //localStorage.setItem('todo_db', JSON.stringify(this.todoItems));
    localStorage.setItem('todo_db', JSON.stringify(this.todoItems()));
    console.log('SERVICE LOG: Saved! ' + this.todoItems().length);
    this.todoItemsListModify.emit();

  }
}
