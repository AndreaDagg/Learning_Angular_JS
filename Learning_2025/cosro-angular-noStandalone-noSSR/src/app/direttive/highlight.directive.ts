import { Directive, ElementRef, HostListener, Input } from '@angular/core';

// Specifica che questa calsse è una direttiva
// Il selettore della direttiva è appHighlight (nome con cui faremo riferimtno alla direttiva nel template)
@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  // Input per passare il colore di sfondo dell'elemento HTMl serve per prendere in input tramite il property binding il colore di sfondo
  // Il nome della variabile è appHighlight non possiamo mettere un nome a caso
  @Input() appHighlight = '';
  @Input() appHighlight_default = '';

  constructor(private element: ElementRef) { 
    this.element.nativeElement.style.backgroundColor = 'yellow';
  }
// Metodo per cambiare il colore di sfondo dell'elemento al passaggio del mouse
  @HostListener('mouseenter') onMouseEnter(){
    this.element.nativeElement.style.backgroundColor = this.appHighlight || this.appHighlight_default;
  }
// Metodo per cambiare il colore di sfondo dell'elemento al LEAVE del mouse
  @HostListener('mouseleave') onMouseLeave(){
    this.element.nativeElement.style.backgroundColor = 'orange';
  }

}
