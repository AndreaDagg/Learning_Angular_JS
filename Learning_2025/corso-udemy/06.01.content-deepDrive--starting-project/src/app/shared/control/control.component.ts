import {
  Component,
  ContentChild,
  ElementRef,
  inject,
  input,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  // Si dice ad Angular di non incapsulare gli stili, rendendoli globali per tutta l'applicazione.
  encapsulation: ViewEncapsulation.None,
  // Host fa in modo che il componente abbia la classe 'control' nel DOM anche se non è presente nel template.
  host: {
    class: 'control',
    '(click)': 'onClick()',
  },
})
export class ControlComponent {
  label = input.required<string>();
  /* 
  * ElementRef è un servizio di Angular che permette di accedere all'elemento del DOM a cui è associato il componente.
  * In questo caso, viene iniettato nel costruttore del componente e assegnato alla proprietà 'el'.
  * Questo servizio è utile per accedere direttamente all'elemento host in maniera programamtica e modificarlo.
  * // `private el = inject(ElementRef);` è un modo per ottenere un riferimento diretto 
// all'elemento DOM associato a questo componente o direttiva in Angular.
//
// 📌 Cosa fa?
// - `inject(ElementRef)` sostituisce l'uso del costruttore per iniettare `ElementRef`.
// - Restituisce un'istanza di `ElementRef`, che ci permette di manipolare il DOM direttamente.
//
// 📌 Perché usarlo?
// - È un'alternativa più pulita alla Dependency Injection tradizionale nel costruttore.
// - Può essere utilizzato anche al di fuori di classi che supportano il costruttore, come funzioni standalone.
//
  */
  private el = inject(ElementRef);
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

  @ContentChild('input') private control?: ElementRef<HTMLInputElement | HTMLTextAreaElement>;

  onClick() {
    console.log('Control clicked');
    console.log(this.el);
    console.log(this.control);
  }
}
