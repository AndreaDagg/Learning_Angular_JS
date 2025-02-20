import { Component, ElementRef, EventEmitter, output, ViewChild } from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from "../../../shared/control/control.component";
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent {
  /**
 * @ViewChild e @ContentChild sono decoratori Angular utilizzati per accedere agli elementi del DOM o ai componenti figli.  
 *  
 * - @ViewChild('form') form?: ElementRef<HTMLFormElement>;  
 *   Questo decoratore viene utilizzato per ottenere un riferimento a un elemento figlio presente nel template del componente (View DOM).  
 *   In questo caso, la proprietà `form` conterrà un riferimento all'elemento `<form>` con il template reference variable `#form`.  
 *   Utile, ad esempio, per accedere e manipolare il form direttamente nel codice TypeScript.  
 *  
 * - @ContentChild('input') private control?: ElementRef<HTMLInputElement | HTMLTextAreaElement>;  
 *   Questo decoratore viene utilizzato per ottenere un riferimento a un elemento figlio che viene proiettato nel componente tramite `<ng-content>`.  
 *   In questo caso, la proprietà `control` farà riferimento a un elemento `<input>` o `<textarea>` con il template reference variable `#input`,  
 *   che viene passato da un altro componente padre.  
 *   Utile per interagire con contenuti proiettati, ad esempio per applicare comportamenti personalizzati sugli input.  
 *  
 * In sintesi:  
 * - @ViewChild viene usato per elementi nel template del componente.  
 * - @ContentChild viene usato per elementi forniti da un altro componente tramite proiezione di contenuti.  
 */

  @ViewChild('form') form?: ElementRef<HTMLFormElement>;

  //@Output<>() add = new EventEmitter<{ title: string, description: string }>();
  // METODO MODERNO 
  add = output<{ title: string, description: string }>();

  onSubmit(title: string, textArea: string) {
    console.log('Ticket submitted with title:', title, 'and description:', textArea);
    this.add.emit({ title: title, description: textArea }); 
    this.form?.nativeElement.reset();
  }

}
