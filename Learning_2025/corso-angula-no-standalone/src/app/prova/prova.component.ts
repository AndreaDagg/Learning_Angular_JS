import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-prova',
  templateUrl: './prova.component.html',
  styleUrl: './prova.component.css'
})
// Implement the lifecycle hooks in the ProvaComponent class.
// The lifecycle hooks are implemented as methods in the ProvaComponent class.
// The methods are called by Angular at specific points in the component's lifecycle.
// Anche se sono implementati in ordine diverso srispetto all'orine del lifecicle non è un problema
// Dalla console del browser possiamo vedere l'esecuzione dei metodi del lifecycle
export class ProvaComponent implements OnInit, AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, DoCheck, OnDestroy {
  constructor() {

    console.log('Costruttore');

   }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }

  ngAfterViewInit(): void {
    console.log(' ngAfterViewInit');
  }

  ngDoCheck(): void {
    console.log('ngDoCheck');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }

  ngOnInit() {
    console.log('ngOnInit');
  }

}
