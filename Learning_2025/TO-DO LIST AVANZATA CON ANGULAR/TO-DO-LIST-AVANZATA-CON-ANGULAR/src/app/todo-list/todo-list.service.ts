import { Injectable } from '@angular/core';
import {TodoitemsService} from '../shared/todoitems.service.ts.service';
@Injectable({
  providedIn: 'root'
})
export class TodoListService {

  constructor(private todoItemsService: TodoitemsService) { }

  //--- CHIAMATA SPECIFICA
    //TODO: Metterlo nel service specifico della componente Lista
    // Ogni volta che us
    getTodoItems() {
      return this.todoItemsService.doHttpRequest("itemController");
    }


}
