import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

import { TodoItem } from '../shared/todo-item.model';
import { FormsModule } from '@angular/forms';
import { TodoitemsService } from '../shared/todoitems.service.ts.service';

@Component({
  selector: 'app-todo-form',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatSelectModule,FormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './todo-form.component.html',
  styleUrl: './todo-form.component.css',
})
export class TodoFormComponent {
  @Output() submit = new EventEmitter<TodoItem>();


  idForm!: string;
  titleForm!: string;
  descriptionForm!: string;
  doneForm: boolean = false;
  categoryForm!: 'work' | 'family' | 'hobby'; 
  
  buttonDisabled = true;

  constructor(private todoitemsService: TodoitemsService) {}  

  ngAfterViewChecked() {
    if (this.titleForm && this.descriptionForm && this.categoryForm) {
      this.buttonDisabled = false;
    } else {
      this.buttonDisabled = true;
    }
  }

  onSubmit() {
    const toDoItem: TodoItem = {
      id: new Date().getTime().toString(),
      title: this.titleForm,
      description: this.descriptionForm,
      done: false,
      category: this.categoryForm
    };    
    
    //console.log('Form submitted with id: ' + toDoItem.id + ' title: ' + toDoItem.title + ' description: ' + toDoItem.description + ' done: ' + toDoItem.done + ' category: ' + toDoItem.category);
    

    this.submit.emit(toDoItem);
    
    this.addNewTodoItem(toDoItem);

    
  }

  addNewTodoItem(todoItem: TodoItem) {
    this.todoitemsService.addTodoItem(todoItem); 
  }
}
