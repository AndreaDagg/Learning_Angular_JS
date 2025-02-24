import { Component } from '@angular/core';
import { TodoListComponent } from '../todo-list/todo-list.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { TodoFormComponent } from '../todo-form/todo-form.component';
import { ToolbarComponent } from "../toolbar/toolbar.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TodoListComponent, MatGridListModule, TodoFormComponent, ToolbarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  title = 'TO-DO-LIST-AVANZATA-CON-ANGULAR';
}
