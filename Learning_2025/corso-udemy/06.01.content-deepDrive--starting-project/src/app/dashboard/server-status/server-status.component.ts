import { Component, effect, OnDestroy, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css',
})

/**
 * Utilizziamo implements OnInit per definire il metodo ngOnInit() che verrà eseguito quando il componente viene inizializzato.
 * Se non lo si implementa abbiamo un errore che ci aiuta in fase di debug.
 */
export class ServerStatusComponent implements OnInit, OnDestroy {
  // APPROACIO CLASSICO
  //currentStatus: 'offline' | 'unknown' | 'online' = 'online';
  currentStatus = signal<'offline' | 'unknown' | 'online'>('offline');

  //private interval?:  NodeJS.Timeout;

  constructor() {
    /**
     * Utilizziamo il decoratore @effect per definire un effetto che verrà eseguito ogni volta che il valore di currentStatus cambia.
     * In questo caso, stiamo semplicemente stampando il nuovo valore della proprietà currentStatus nella console.
     * Questo ci permette di monitorare i cambiamenti di stato del server in tempo reale.
     * In questo modo Angular effettua una SOTTOSCIRIZIONE all'evento di cambio di stato.
     */
    effect(() => {
      console.log('Server status changed:', this.currentStatus());
    });
  }

  ngOnInit() {
    // APPROCCIO CLASSICO
    /* setInterval(() => {
      const randomValue = Math.random();
      if (randomValue < 0.5) {
        this.currentStatus = 'online';
      } else if (randomValue < 0.9) {
        this.currentStatus = 'offline';
      } else {
        this.currentStatus = 'unknown';
      }
    }, 5000); */

    setInterval(() => {
      const randomValue = Math.random();
      if (randomValue < 0.5) {
        this.currentStatus.set('online');
      } else if (randomValue < 0.9) {
        this.currentStatus.set('offline');
      } else {
        this.currentStatus.set('unknown');
      }
    }, 5000);
  }

  ngOnDestroy(): void {
      //clearTimeout(this.interval);
  }
}
