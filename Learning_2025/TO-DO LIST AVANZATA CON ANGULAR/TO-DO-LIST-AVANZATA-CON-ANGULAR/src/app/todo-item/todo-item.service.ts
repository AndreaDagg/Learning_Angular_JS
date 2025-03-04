import { Injectable } from '@angular/core';
import {TodoitemsService} from '../shared/todoitems.service.ts.service';

@Injectable({
  providedIn: 'root'
})
export class TodoItemService {

  constructor(private todoItemsService: TodoitemsService) { }

  
  updateDone(id: string, done: boolean) {
    return this.todoItemsService.doHttpRequestDoneUpdate("itemController", id, done);
  }

  deleteItemQuery(id: string) {
    let id_number = parseInt(id);
    return this.todoItemsService.doHttpRequestDelete("itemController", id_number );
  }
}
