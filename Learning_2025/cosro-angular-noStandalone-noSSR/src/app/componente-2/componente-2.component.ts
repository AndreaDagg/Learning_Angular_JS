import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import { ServizioProvaService } from '../servizi/servizio-prova.service';



@Component({
  selector: 'app-componente-2',
  templateUrl: './componente-2.component.html',
  styleUrl: './componente-2.component.css'
})
export class Componente2Component implements OnInit, AfterViewInit{
  colore = "";
  
  // Riceve i dati nella variabile data dal componente padre
  @Input() data: any;
  // Mandare i dati al componente padre tramite l'evento mandaDatiEveto
  // Il padre deve restare in attesa dell'evento e va detto nella chimata del componente dal padre al figlio
  @Output() mandaDatiEveto = new EventEmitter<string>();

  
  
  // Importiao il servizio per poterlo utilizzare e ddefinirlo nel costruttore
  constructor(private servizioProva: ServizioProvaService) { }

  
  ngOnInit(): void {
    console.log(this.servizioProva.automobili);
  }

  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
  }


  mandaDati(){
    this.mandaDatiEveto.emit(<string>("Lunghezza dell'array dei cani pari a : " + this.data.length));
  }

  selezionaColore(colorePar: string){
    this.colore = colorePar;
  }

}
