import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  /*------------ VARIABILI GGLOBALI E LOCALI ----------- 
   ** Questa sintassi serve per dichiarare attributi della classe mentre la scrittura classica string username = "..." è applicabile solamente alle singole funzioni*/

  nome: string = "Andrea00"
  /**----------- 
   * In questo modo la classe si aspetta un passaggio di valore che proviene da una classe padre 
  */
  @Input() username_Figlio: string = ""; 


  constructor() { }

  ngOnInit(): void {
  } 

}
