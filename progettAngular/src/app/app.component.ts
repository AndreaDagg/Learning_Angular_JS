import { Component } from '@angular/core';


/*Com'è fatto un componente? 
* Un componente ha un file html uno ts e uno css 
* L'array di css interessa solo l'html del componente
*/
@Component({
  selector: 'app-root',                 //nome del tag html che usiamo per chiamare il componente 
  templateUrl: './app.component.html',  //dove predere il codice html
  styleUrls: ['./app.component.css']    //array per collegare i file .css
})
/* Tramite questa dichiarazione si creano le classi typeScript */
export class AppComponent {
  title = 'progettAngular';
}
