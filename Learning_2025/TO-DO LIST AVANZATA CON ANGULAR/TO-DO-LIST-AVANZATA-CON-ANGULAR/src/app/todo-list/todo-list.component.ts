import { Component, OnInit, signal } from '@angular/core';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';
import { TodoItemComponent } from "../todo-item/todo-item.component";
import { TodoitemsService } from '../shared/todoitems.service.ts.service';
import { NgFor, CommonModule } from '@angular/common';
import type { TodoItem } from '../shared/todo-item.model';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [MatCardModule, MatChipsModule, MatProgressBarModule, TodoItemComponent],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent implements OnInit {

  todoItemsList: TodoItem[] = this.toDoService.getTodoItems(); 
  //todoItemsList = signal<TodoItem[]>([]);

  constructor(private toDoService: TodoitemsService) { }

  ngOnInit() {
    this.todoItemsList = this.toDoService.getTodoItems();
    console.log(this.toDoService.getTodoItems());
        
    this.toDoService.todoItemsListModify.subscribe(() => {
      this.onAddItem();
    }); 
  }

  deletedItem(id: string) {
    this.todoItemsList = this.toDoService.getTodoItems();
    //this.todoItemsList.set(this.toDoService.getTodoItems());
  }

  onAddItem() {
    this.todoItemsList = this.toDoService.getTodoItems();
    //this.todoItemsList.set(this.toDoService.getTodoItems());
  }



}
