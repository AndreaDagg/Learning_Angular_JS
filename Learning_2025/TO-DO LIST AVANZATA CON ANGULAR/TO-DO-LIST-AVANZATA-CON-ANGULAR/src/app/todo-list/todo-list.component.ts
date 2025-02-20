import { Component, OnInit } from '@angular/core';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';
import { TodoItemComponent } from "../todo-item/todo-item.component";
import { TodoitemsService } from '../shared/todoitems.service.ts.service';
import { NgFor, CommonModule } from '@angular/common';
import { TodoItem } from '../shared/todo-item.model';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [MatCardModule, MatChipsModule, MatProgressBarModule, TodoItemComponent],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent implements OnInit {

  todoItemsList: TodoItem[] = this.toDoService.getTodoItems(); 

  constructor(private toDoService: TodoitemsService) {
    /* this.todoItemsList = toDoService.getTodoItems();
    console.log('LOG: TodoItemsList: ' + this.todoItemsList); */
  }

  ngOnInit() {
    this.todoItemsList = this.toDoService.getTodoItems();

    console.log('LOG: TodoItemsList: ' + this.todoItemsList[0].title);
  }


  

  longText = "Ciao"; 

}
