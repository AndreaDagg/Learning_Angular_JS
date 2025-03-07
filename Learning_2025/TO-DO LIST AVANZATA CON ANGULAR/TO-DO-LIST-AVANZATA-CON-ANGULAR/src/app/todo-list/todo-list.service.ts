import { Injectable } from '@angular/core';
import { TodoitemsService } from '../shared/todoitems.service.ts.service';
@Injectable({
  providedIn: 'root',
})
export class TodoListService {
  constructor(private todoItemsService: TodoitemsService) {}

  //--- CHIAMATA SPECIFICA
  /**
   * Funzioan perché la View è costruita congli stessi nomi dei parametri della lista degli items
   * SQL QUERY::: CREATE VIEW VIEW_item_translated AS SELECT  I.ID AS id, T.TITLE_EN AS TITLE_EN, T.DESCRIPTION_EN AS DESCRIPTION_EN , I.CATEGORY AS CATEGORY, I.DONE AS DONE FROM ITEMS I JOIN TODO_ITEMS_TRANSLATED T ON I.ID = T.ID_ITA
   * @returns La lista degli items dal DB oppure la View se la lingua è impostata ad inglese
   */
  getTodoItems() {
    if (this.todoItemsService.getLanguage()) {
      //TODO: Implementare la chiamata alla view
      return this.todoItemsService.doHttpRequest_UNICA("POST", "itemController");
    } else {
      return this.todoItemsService.doHttpRequest_UNICA("POST", "itemController");
    }
  }
}
