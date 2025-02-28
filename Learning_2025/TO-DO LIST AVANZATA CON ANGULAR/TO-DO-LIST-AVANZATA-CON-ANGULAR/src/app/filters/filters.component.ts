import { Component, effect, Input, signal} from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import type { filterActive } from './filters.model';
import { TodoitemsService } from '../shared/todoitems.service.ts.service';
import type { TodoItem } from '../shared/todo-item.model';

@Component({
  selector: 'app-filters',
  standalone: true,
  imports: [MatCheckboxModule],
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.css'
})
export class FiltersComponent {
  
  @Input({required: true}) checkName!: string;
  @Input({required: true}) listItems!: TodoItem[];



  public filters = signal<filterActive>({
    filterActive: true,
    filterCompleted: true,
  });

  constructor(private toDoService: TodoitemsService) {
    effect(() => {
      //console.log("Active: " + this.filters().filterActive + " Completed: " + this.filters().filterCompleted);
      //this.onFilter(this.checkName as 'active' | 'completed');

      if(this.filters().filterActive && !this.filters().filterCompleted) {
        this.listItems = this.listItems.filter((item) => item.done === false);
      } else if(this.filters().filterCompleted && !this.filters().filterActive) { 
        this.listItems = this.listItems.filter((item) => item.done === true);
      }

      console.log("Active: " + this.filters().filterActive + " Completed: " + this.filters().filterCompleted);
      
    });

  }

  onFilter(type: 'active' | 'completed') {
    if (type === 'active') {
      //this.filterActive.filterActive = !this.filterActive.filterActive;
      this.filters.update((current) => ({...current, filterActive: !current.filterActive}));
      
      //console.log( "Active: " + this.filterActive.filterActive + " Completed: " + this.filterActive.filterCompleted);
    } else {
      this.filters.update((current) => ({...current, filterCompleted: !current.filterCompleted}));
      //this.filterActive.filterCompleted = !this.filterActive.filterCompleted;
      //console.log( "Active: " + this.filterActive.filterActive + " Completed: " + this.filterActive.filterCompleted);
    }

    //this.toDoService.setFilterActive(this.filterActive);
    
  }

 /*  get filters() {
    return this.filterActive();
  } */
}
