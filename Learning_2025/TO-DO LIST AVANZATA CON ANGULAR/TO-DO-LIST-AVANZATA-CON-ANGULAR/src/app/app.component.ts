import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoListComponent } from "./todo-list/todo-list.component";
import {MatGridListModule} from '@angular/material/grid-list';
import { TodoFormComponent } from "./todo-form/todo-form.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TodoListComponent, MatGridListModule, TodoFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'TO-DO-LIST-AVANZATA-CON-ANGULAR';
}
