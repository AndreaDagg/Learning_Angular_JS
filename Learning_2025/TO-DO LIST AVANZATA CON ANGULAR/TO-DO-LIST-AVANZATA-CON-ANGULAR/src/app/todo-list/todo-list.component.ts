import { Component, effect, OnInit, signal } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { NgFor, CommonModule } from '@angular/common';
import type { TodoItem } from '../shared/todo-item.model';
import type { filterActive } from '../filters/filters.model';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { BrowserModule } from '@angular/platform-browser';
import {
  HttpClientModule,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';

import { TodoitemsService } from '../shared/todoitems.service.ts.service';
import { TodoListService } from './todo-list.service';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [
    MatCardModule,
    MatChipsModule,
    MatProgressBarModule,
    TodoItemComponent,
    MatCheckboxModule,
    HttpClientModule,
  ],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css',
})
export class TodoListComponent implements OnInit {
  //todoItemsList: TodoItem[] = this.toDoService.getFilterActiveList();
  //-- CON UNICO SERVICE
  //todoItemsList = signal<TodoItem[]>(this.toDoService.getFilterActiveList());
  //-- CON DUE SERVICE SEPARATI
  //todoItemsList = signal<TodoItem[]>([]);

  todoItemsList!: TodoItem[];

  private filterActive = signal<boolean>(true);
  private filterCompleted = signal<boolean>(true);

  constructor(
    private todoListService: TodoListService,
    private toDoService: TodoitemsService,
  ) {
    /* effect(() => {
      console.log(
        'Filter Active: ' +
          this.filterActive +
          '\nCompleted:' +
          this.filterCompleted
      );
        
      this.filterdItems();

    }); */
  }

  ngOnInit() {
    this.setItemsList();
    //debugger

    this.toDoService.todoItemsListModify.subscribe(() => {
      this.setItemsList();
    });

   
  }

  setItemsList() {
    this.todoListService.getTodoItems().then((value: unknown) => {
      const res = value as HttpResponse<any>;
      console.log(res.body);
      this.todoItemsList = res.body;
    });
  }

  get filters() {
    return {
      filterActive: this.filterActive,
      filterCompleted: this.filterCompleted,
    };
  }

  //Qua settiamo aggiorniamo i nuovi valori dei filtri
  onFilter(type: 'active' | 'completed') {
    //console.log(this.filterActive + " " + this.filterCompleted);
    if (type === 'active') {
      this.filterActive.update((currentValue) => !currentValue);
    } else {
      this.filterCompleted.update((currentValue) => !currentValue);
    }
  }

  filterdItems() {
    this.todoItemsList = this.todoItemsList.filter((item) => {
      if (this.filterCompleted) {
        
        return item.done === this.filterCompleted();
      } else if (this.filterActive) {
         
        return item.done === this.filterActive();
      } else {
        
        return item;
      }
    });
  }
}
