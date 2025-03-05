import { EventEmitter, Injectable, Output, signal, Input } from '@angular/core';
import type { TodoItem } from './todo-item.model';
import type { TodoItemNoID } from './todo-item-noID.model';
import type { filterActive } from '../filters/filters.model';
import { HttpClient, HttpRequest, HttpResponse } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodoitemsService {
  //private todoItems: TodoItem[] = [];
  todoItems = signal<TodoItem[]>([]);

  @Output() todoItemsListModify = new EventEmitter<void>();

  /**
   * An observable that emits the current language setting.
   * This observable is derived from the `languageSubject` and can be used to subscribe to language changes.
   * Default false -> Italiano
   */
  private isEnglish: boolean = (false);

  constructor(private httpClient: HttpClient) {}

  //--- CHIAMATA GENERICA
  doHttpRequest(table: String) {
    let httpRequest = new HttpRequest(
      'GET',
      'http://localhost:8080/api/' + table
    );
    return new Promise((resolve, reject) => {
      //L'oggetto rq devo utilizzarlo come parametro della richiesta della funzione request dell'http client
      const rq = this.httpClient.request(httpRequest);
      if (rq) {
        rq.toPromise().then(
          (res) => {
            // Success
            resolve(res);
          },
          (msg) => {
            // Error
            reject(msg);
          }
        );
      }
    });
  }

  doHttpRequestDoneUpdate(table: string, id: string, done: boolean) {
    const url = `http://localhost:8080/api/${table}/updateDone?id=${id}&done=${done}`;
    return this.httpClient
      .put(url, null)
      .toPromise()
      .then((res) => {
        console.log(
          'SERVICE LOG: Updated todo item with id: ' + id + ' to done: ' + done
        );
        this.todoItemsListModify.emit();
        return res;
      })
      .catch((msg) => {
        throw msg;
      });
  }

  doHttpRequestAddNewItem(table: string, todoItemNoID: TodoItemNoID) {
    const url = `http://localhost:8080/api/${table}/addNewItem`;
    return this.httpClient
      .post(url, todoItemNoID)
      .toPromise()
      .then((res) => {
        console.log(
          'SERVICE LOG: Added todo item with:\n id: ' +
            'AUTOGENERATE' +
            '\n title: ' +
            todoItemNoID.title +
            '\n description: ' +
            todoItemNoID.description +
            '\n done: ' +
            todoItemNoID.done +
            '\n category: ' +
            todoItemNoID.category
        );
        this.todoItemsListModify.emit();
        return res;
      })
      .catch((msg) => {
        throw msg;
      });
  }

  doHttpRequestDelete(table: string, id: number) {
    const url = `http://localhost:8080/api/${table}/deleteItem?id=${id}`;
    return this.httpClient
      .delete(url)
      .toPromise()
      .then((res) => {
        console.log('SERVICE LOG: Deleted todo item with id: ' + id);
        this.todoItemsListModify.emit();
        return res;
      })
      .catch((msg) => {
        throw msg;
      });
  }

  setLanguage(isEnglish: boolean) {
    this.isEnglish = isEnglish // Aggiorna il valore della lingua
    this.todoItemsListModify.emit(); // Notifica il cambiamento
  }

  getLanguage() {
    return this.isEnglish;
  }

}
