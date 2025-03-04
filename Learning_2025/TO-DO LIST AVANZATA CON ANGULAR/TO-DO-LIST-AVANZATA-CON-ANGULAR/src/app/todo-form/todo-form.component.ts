
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  ViewChild,
  AfterViewChecked,
  OnInit,
} from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

import { TodoItemNoID } from '../shared/todo-item-noID.model';
import { ReactiveFormsModule, FormGroup, FormControl, FormsModule } from '@angular/forms';
import { TodoitemsService } from '../shared/todoitems.service.ts.service';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import { TodoFormService } from './todo-form.service';

@Component({
  selector: 'app-todo-form',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    CommonModule,
    MatCardModule,
    ReactiveFormsModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './todo-form.component.html',
  styleUrl: './todo-form.component.css',
})
export class TodoFormComponent implements OnInit{
  //@Output() submit = new EventEmitter<TodoItem>();
  @ViewChild('todoForm') todoForm?: ElementRef<HTMLFormElement>;

  idForm!: string;  
  doneForm: boolean = false;
 
  taskForm = new FormGroup({
    titleForm: new FormControl<string>('', { nonNullable: true }),
    descriptionForm: new FormControl<string>('', { nonNullable: true }),
    categoryForm: new FormControl<'work' | 'family' | 'hobby' | "Categoria">('Categoria', { nonNullable: true }),
  });
  
  
  
  placeholderTitle = 'Titolo';
  placeholderDescription = 'Note';
  placeholderCategory = 'Categoria';

  buttonDisabled = true;

  constructor(private todoFormService: TodoFormService) {}

  ngOnInit() {
    this.taskForm.valueChanges.subscribe((values) => {
      const allFieldsModified =
        values.titleForm !== '' &&
        values.descriptionForm !== '' &&
        values.categoryForm !== 'Categoria';
  
      this.buttonDisabled = !allFieldsModified;
    });
  }
  

  onSubmit() {
    const toDoItem: TodoItemNoID = {
      title: this.taskForm.get('titleForm')?.value || '',
      description: this.taskForm.get('descriptionForm')?.value || '',
      done: false,
      category: this.taskForm.get('categoryForm')?.value as 'Categoria' | 'work' | 'family' | 'hobby',
    };
    
    //this.todoitemsService.addTodoItem(toDoItem);
    this.todoFormService.addNewItemQuery(toDoItem);
    this.taskForm.reset();
  }
  
 
}
