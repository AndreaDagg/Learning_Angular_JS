import { Component } from '@angular/core';
import { FiltersComponent } from "../filters/filters.component";

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [FiltersComponent],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.css'
})
export class ToolbarComponent {

}
