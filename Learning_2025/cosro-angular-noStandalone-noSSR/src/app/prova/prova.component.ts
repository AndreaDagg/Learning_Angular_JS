import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-prova',
  templateUrl: './prova.component.html',
  styleUrls: ['./prova.component.css'], // Corretto qui
})
// Implement the lifecycle hooks in the ProvaComponent class.
// The lifecycle hooks are implemented as methods in the ProvaComponent class.
// The methods are called by Angular at specific points in the component's lifecycle.
// Anche se sono implementati in ordine diverso srispetto all'orine del lifecicle non è un problema
// Dalla console del browser possiamo vedere l'esecuzione dei metodi del lifecycle
export class ProvaComponent implements OnInit {

  
  isDisabled = false;
  vaccinazione = true;
  DatiRicevuti : string = '';

  cani = [
    {
      nome: 'Roger',
      razza: 'golden retriever',
      descrizione: `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
        A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally
        bred for hunting.`,
        isVaccinato: true
    },
    {
      nome: 'Rex',
      razza: 'Pastore tedesco',
      descrizione: `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
        A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally
        bred for hunting.`,
        isVaccinato: false
    },
    {
      nome: 'Luna',
      razza: 'Pastore Abbruzzese',
      descrizione: `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
        A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally
        bred for hunting.`,
        isVaccinato: true
    }
  ];

  constructor() {
    console.log('Costruttore');
  }

  ngOnInit(): void {
    console.log('print: ngOnInit');
    setInterval(() => {
      this.isDisabled = !this.isDisabled;
      //console.log('isDisabled toggled:', this.isDisabled);
    }, 2000);
  }

  //definiamo la funzione onClick che verrà chiamata quando clicchiamo sul bottone nel template
  // Passa il componente come parametro
  OnClick(e: any){
    console.log('onClick');
    console.log(e);
    this.cani[0].nome = 'Fido';
  }

  OnInput(event: Event){
    //console.log('onInput');
    this.cani[0].nome = (<HTMLInputElement>event.target).value;
  }

  modifyVaccinazione(){
    this.vaccinazione = !this.vaccinazione;
  }

  onRicevidati(value: string){
    console.log('Ricevuto:', value);
    this.DatiRicevuti = "Ricevuto: " + value;
  }
}
