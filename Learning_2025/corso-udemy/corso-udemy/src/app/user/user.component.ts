import {
  Component,
  EventEmitter,
  input,
  Input,
  Output,
  signal,
} from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

// Importiamo l'interfaccia del tipo User dal file user.model.ts
import { type User } from './user.model';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
  selectedUser = signal(DUMMY_USERS[this.randomIndex]);

  /**
   * @Input() è un decoratore che ci permette di passare dei dati da un componente padre a un componente figlio.
   * In questo caso, stiamo passando i dati avatar e name dal componente padre (app.component.ts) al componente figlio (user.component.ts).
   * il "!": è un operatore di non-null assertion che ci permette di dichiarare che una variabile non sarà mai null o undefined. Ache se no non la vediamo iniziallizzare qui sappiamo che da qualche arte di inizzalizza
   * {required: true} è un oggetto che ci permette di dichiarare che il valore passato tramite @Input() è obbligatorio.
   */
  /* --- Passiamo un oggetto user sora definito da un'interfaccia e commento i campi singoli
    @Input({ required: true }) id!: string;
    @Input({ required: true }) avatar!: string;
    @Input({ required: true }) name!: string; 
    
    */

  @Input({required: true}) user! : User
   /**
   * @Output() permette al componente di emettere eventi verso il componente padre.
   * ventEmitter indica che l'evento non trasporta dati, ma solo la notifica dell'evento.
   * 
   * Il componente figlio emette l'evento "userSelected" con EventEmitter.  
   * Il componente padre intercetta l'evento con (userSelected)="onSelectedUser($event)" e chiama il metodo "onSelectedUser()" per gestire l'azione.  
   * */
  @Output() userSelected = new EventEmitter<string>();

  /** ------------- SIGNAL ---------------
   *  I Signal di Angular sono una funzionalità per la gestione della reattività,
      simili a BehaviorSubject ma con un approccio più semplice e performante. 

      Caratteristiche principali:
      - Reattività automatica: aggiornano automaticamente i componenti che li usano.
      - Semplicità: eliminano la necessità di sottoscrizioni manuali (come negli Observables).
      - Prestazioni migliori: aggiornano solo le parti necessarie senza triggerare il change detection globale.

       avatar = input.required<string>();
       userSeleccted = output<string>()

       userImagePAth = computed(() => {
        return "assets/users/" + this.avatar():
    }); 

   */

  get userImagePAth() {
    // return "assets/users/" +this.selectedUser().avatar;
    return 'assets/users/' + this.user.avatar;
  }

  onSelectedUser() {
    //this.randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    //this.selectedUser.set(DUMMY_USERS[this.randomIndex]);

    /**
     * emit() è un metodo che permette di emettere un evento.
     */
    this.userSelected.emit(this.user.id);
    console.log('(User Component) - User selected:', this.user.id);
 
  }
}
