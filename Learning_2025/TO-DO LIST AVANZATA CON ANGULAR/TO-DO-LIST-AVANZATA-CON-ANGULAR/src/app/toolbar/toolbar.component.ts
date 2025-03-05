import { Component, EventEmitter, Output } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle'; // Import corretto
import { FormsModule } from '@angular/forms';
import { TodoitemsService } from '../shared/todoitems.service.ts.service';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [MatSlideToggleModule, FormsModule],
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {
  isEnglishItems: boolean = false;

  constructor(private todoitemsService: TodoitemsService) {}

  setLanguage() {
    console.log("English: " + this.isEnglishItems);
    this.todoitemsService.setLanguage(this.isEnglishItems); 
  }



}
