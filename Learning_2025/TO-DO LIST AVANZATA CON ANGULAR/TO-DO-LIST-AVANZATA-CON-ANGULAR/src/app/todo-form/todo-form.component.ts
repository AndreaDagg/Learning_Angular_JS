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

import { TodoItem } from '../shared/todo-item.model';
import { FormsModule } from '@angular/forms';
import { TodoitemsService } from '../shared/todoitems.service.ts.service';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';

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
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './todo-form.component.html',
  styleUrl: './todo-form.component.css',
})
export class TodoFormComponent implements AfterViewChecked, OnInit{
  //@Output() submit = new EventEmitter<TodoItem>();
  @ViewChild('todoForm') todoForm?: ElementRef<HTMLFormElement>;

  idForm!: string;
  titleForm!: string;
  descriptionForm!: string;
  doneForm: boolean = false;
  categoryForm!: "work" | "family" | "hobby" | "Categoria";

  placeholderTitle = 'Titolo';
  placeholderDescription = 'Note';
  placeholderCategory = 'Categoria';

  buttonDisabled = true;

  constructor(private todoitemsService: TodoitemsService) {}

  ngOnInit() {
  }

  ngAfterViewChecked() {
    if (
      this.titleForm &&
      this.titleForm != this.placeholderTitle &&
      this.descriptionForm &&
      this.descriptionForm != this.placeholderDescription &&
      this.categoryForm &&
      this.categoryForm != this.placeholderTitle
    ) {
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
      category: this.categoryForm,
    };

    //console.log('Form submitted with id: ' + toDoItem.id + ' title: ' + toDoItem.title + ' description: ' + toDoItem.description + ' done: ' + toDoItem.done + ' category: ' + toDoItem.category);

    //this.submit.emit(toDoItem);

    this.addNewTodoItem(toDoItem);
  }

  addNewTodoItem(todoItem: TodoItem) {
    this.todoitemsService.addTodoItem(todoItem);
    this.todoForm?.nativeElement.reset();
    this.buttonDisabled = true;
  }
}
