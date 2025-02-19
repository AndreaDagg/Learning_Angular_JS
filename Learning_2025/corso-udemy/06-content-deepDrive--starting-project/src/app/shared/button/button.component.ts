import { Component } from '@angular/core';

/**
 * Button component
 * il selettore 'button[appButton]' permette di utilizzare il componente come attributo di un tag button
 * <button appButton></button>
 * Questo sta adindicare che tutti gli elementi di tipo button che hanno l'attributo appButton verranno sostituiti e contorllati con il template del componente
 */
@Component({
  selector: 'button[appButton]',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {

}
