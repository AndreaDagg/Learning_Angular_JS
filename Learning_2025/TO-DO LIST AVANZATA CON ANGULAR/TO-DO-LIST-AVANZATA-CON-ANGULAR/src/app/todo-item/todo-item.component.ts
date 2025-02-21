import {
  Component,
  Input,
  AfterViewChecked,
  Output,
  EventEmitter,
  OnInit,
} from '@angular/core';
import type { TodoItem } from '../shared/todo-item.model';
import type { filterActive } from '../filters/filters.model';
import { TodoitemsService } from '../shared/todoitems.service.ts.service';
import { ChangeDetectionStrategy } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [MatCardModule, MatCheckboxModule, FormsModule, CommonModule],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css',
})
export class TodoItemComponent implements OnInit {
  @Input({ required: true }) todoItem!: TodoItem;
  @Output() delete = new EventEmitter<string>();


  deleteChecked = true;

  constructor(private todoitemsService: TodoitemsService) {}

  ngOnInit() {
    if (this.todoItem.done == true) {
      this.deleteChecked = false;
    }
  }

  onDone() {
    this.todoitemsService.setIfDone(this.todoItem.id, !this.todoItem.done);
    this.deleteChecked = !this.deleteChecked;

  }

  onDelete() {
    if (this.todoItem.done == true) {
      this.todoitemsService.deleteTodoItem(this.todoItem.id);
      this.delete.emit(this.todoItem.id);
    } else {
      //TODO: Add a snackbar to notify the user that the item cannot be deleted
      console.log('You cannot delete an item that is not done');
    }
  }
}
