import { Component, Input} from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import type { filterActive } from './filters.model';
import { TodoitemsService } from '../shared/todoitems.service.ts.service';

@Component({
  selector: 'app-filters',
  standalone: true,
  imports: [MatCheckboxModule],
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.css'
})
export class FiltersComponent {



  private filterActive: filterActive = {
    filterActive: true,
    filterCompleted: true,
  };

  constructor(private toDoService: TodoitemsService) {}

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

  get filters() {
    return this.filterActive;
  }
}
