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

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [
    MatCardModule,
    MatChipsModule,
    MatProgressBarModule,
    TodoItemComponent,
    MatCheckboxModule,
  ],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css',
})
export class TodoListComponent implements OnInit {
  //todoItemsList: TodoItem[] = this.toDoService.getFilterActiveList();
  todoItemsList = signal<TodoItem[]>(this.toDoService.getFilterActiveList());

  

  private filterActive: filterActive = {
    filterActive: true,
    filterCompleted: true,
  };

  constructor(private toDoService: TodoitemsService) {}

  ngOnInit() {
    //this.todoItemsList = this.toDoService.getFilterActiveList();
    this.todoItemsList.set(this.toDoService.getFilterActiveList());

    this.toDoService.todoItemsListModify.subscribe(() => {
      this.todoItemsList.set(this.toDoService.getFilterActiveList());
    }); 

    /* effect(() => {     
      
      this.todoItemsList.set(this.toDoService.getFilterActiveList());
     }); */
  }

  deletedItem(id: string) {
    //this.todoItemsList = this.toDoService.getFilterActiveList();
    this.todoItemsList.set(this.toDoService.getFilterActiveList());
  }

  get filters() {
    return this.filterActive;
  }

  onFilter(type: 'active' | 'completed') {
    if (type === 'active') {
      this.filterActive.filterActive = !this.filterActive.filterActive;
      //console.log( "Active: " + this.filterActive.filterActive + " Completed: " + this.filterActive.filterCompleted);
    } else {
      this.filterActive.filterCompleted = !this.filterActive.filterCompleted;
      //console.log( "Active: " + this.filterActive.filterActive + " Completed: " + this.filterActive.filterCompleted);
    }

    this.toDoService.setFilterActive(this.filterActive);
  }
}
