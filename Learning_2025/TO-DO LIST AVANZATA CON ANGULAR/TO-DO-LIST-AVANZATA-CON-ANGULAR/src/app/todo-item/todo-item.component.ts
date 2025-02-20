import { Component, Input } from '@angular/core';
import type { TodoItem } from '../shared/todo-item.model';
import { TodoitemsService } from '../shared/todoitems.service.ts.service';
import {ChangeDetectionStrategy} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {FormsModule} from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';



@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [MatCardModule, MatCheckboxModule, FormsModule],
  templateUrl: './todo-item.component.html',  
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent {

  @Input({required: true}) todoItem!: TodoItem;


  
  

}
