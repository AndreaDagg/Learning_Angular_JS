import { EventEmitter, Injectable, Output, signal, Input } from '@angular/core';
import type { TodoItem } from './todo-item.model';
import type { TodoItemNoID } from './todo-item-noID.model';
import type { filterActive } from '../filters/filters.model';
import { HttpClient, HttpRequest, HttpResponse } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';

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
      'POST',
      'http://localhost:8080/api/' + table, 
      null
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

  /**
   * 
   * @param table la path della tabella 
   * @param todoItemNoID l'oggetto da aggiungere alla tabella viene passato nel body della richiesta non nella path (in spring è un parametro @RequestBody)
   * @returns la promise della richiesta http
   */
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



  setLanguage(isEnglish: boolean) {
    this.isEnglish = isEnglish // Aggiorna il valore della lingua
    this.todoItemsListModify.emit(); // Notifica il cambiamento
  }

  getLanguage() {
    return this.isEnglish;
  }

  public doHttpRequest_UNICA(paramMethod: string, urlEndpoint: string,
    dataParam?: Object, headers?: Array<{ key: string, value: string }>,
    paramResponseType?: 'arraybuffer' | 'blob' | 'json' | 'text', doUpdate?: boolean): Promise<any> {
 
    console.log("SERVICE GENERAL => doHttpRequest_UNICA");
 
    let host: string = 'http://localhost:8080/api/';
 
    let uri = host + urlEndpoint;
 
    /* if (this.userAgentSrv.browser.toUpperCase() === 'IE') {
      if (uri.indexOf('?') !== -1) {
        uri += '&cache=' + new Date().getTime();
      } else {
        uri += '?cache=' + new Date().getTime();
      }
 
    }
    if (environment.mock) {
      uri += '.json';
      paramMethod = 'GET';
    } */
 
    let httpRequest = new HttpRequest(paramMethod, uri, dataParam, { responseType: (paramResponseType || 'json') });
 
    if (headers && headers.length > 0) {
      headers.map((item) => {
        httpRequest = httpRequest.clone({
          headers: httpRequest.headers.set(item.key, item.value)
        });
      });
    } else {
      httpRequest = httpRequest.clone({
        headers: httpRequest.headers.set("Content-Type", "application/json")
      });
    }
  

    return new Promise((resolve, reject) => {
      const rq = this.httpClient.request(httpRequest);
      if (rq) {
        rq.toPromise().then(
          res => { // Success
            resolve(res);
            //Se la chiamata è andata a buon fine, notifico il cambiamento che aggiorna la schermata
            if (doUpdate) {
              this.todoItemsListModify.emit();
            }
          },
          msg => { // Error
            reject(msg);
          }
        );
      }
 
    });
  }

}
