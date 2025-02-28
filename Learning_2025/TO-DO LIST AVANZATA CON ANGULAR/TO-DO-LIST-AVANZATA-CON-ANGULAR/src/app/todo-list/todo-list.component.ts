import { Component, effect, OnInit, signal } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { TodoitemsService } from '../shared/todoitems.service.ts.service';
import { NgFor, CommonModule } from '@angular/common';
import type { TodoItem } from '../shared/todo-item.model';
import type { filterActive } from '../filters/filters.model';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FiltersComponent } from "../filters/filters.component";

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [
    MatCardModule,
    MatChipsModule,
    MatProgressBarModule,
    TodoItemComponent,
    MatCheckboxModule,
    FiltersComponent
],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css',
})
export class TodoListComponent implements OnInit {
  todoItemsList: TodoItem[] = this.toDoService.getFilterActiveList();
  //todoItemsList = signal<TodoItem[]>(this.toDoService.getFilterActiveList());

  

  constructor(private toDoService: TodoitemsService) {}

  ngOnInit() {
    this.todoItemsList = this.toDoService.getFilterActiveList();
    //this.todoItemsList.set(this.toDoService.getFilterActiveList());

    this.toDoService.todoItemsListModify.subscribe(() => {
      //this.todoItemsList.set(this.toDoService.getFilterActiveList());
    }); 

  }

  deletedItem(id: string) {
    this.todoItemsList = this.toDoService.getFilterActiveList();
    //this.todoItemsList.set(this.toDoService.getFilterActiveList());
  }
}
