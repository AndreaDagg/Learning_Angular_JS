import { Component, EventEmitter, Input, OnInit, Output} from '@angular/core';



@Component({
  selector: 'app-componente-2',
  templateUrl: './componente-2.component.html',
  styleUrl: './componente-2.component.css'
})
export class Componente2Component implements OnInit {

  // Riceve i dati nella variabile data dal componente padre
  @Input() data: any;
  // Mandare i dati al componente padre tramite l'evento mandaDatiEveto
  // Il padre deve restare in attesa dell'evento e va detto nella chimata del componente dal padre al figlio
  @Output() mandaDatiEveto = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  mandaDati(){
    this.mandaDatiEveto.emit(<string>("Lunghezza dell'array dei cani pari a : " + this.data.length));
  }

}
