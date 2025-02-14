import { Component, OnInit } from '@angular/core';
import { ServizioProvaService } from '../../servizi/servizio-prova.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contat',
  templateUrl: './contat.component.html',
  styleUrl: './contat.component.css',
})
export class ContatComponent implements OnInit {
  automobili: any
  automobile: any 
  isProfile: any

  constructor(
    private servizioProva: ServizioProvaService,
    private route: ActivatedRoute
  ) {
    console.log('Costruttore');
  }

  ngOnInit(): void {
    //Importando ActivatedRoute, possiamo ottenere i parametri passati nell'URL. In questo caso, stiamo ottenendo l'id passato nell'URL.
    //Abbiamo anche aggiunto la route con parametro in app-routing.module.ts
    //Gestiamo il passaggio o meno del parametro con una variabile booleana
    //this.isProfile = !this.route.snapshot.paramMap.get('id') ? false : true

    if (this.route.snapshot.paramMap.get('id')) {
      this.isProfile = true;
      this.automobile = this.servizioProva.getAutomobili();
    } else {
      this.isProfile = false;
      this.automobili = this.servizioProva.getAuto(
        parseInt(this.route.snapshot.paramMap.get('id')!)
      );
    }
  }
}
