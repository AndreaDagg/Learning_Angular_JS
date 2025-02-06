import { Injectable } from '@angular/core';

// Permette di iniettre il servizio nei componenti. Il service viene iniettato nelle componenti che noi volgiamo e quindi li ha accesso
@Injectable({
  // Il servizio è disponibile in tutta l'applicazione (root) e non solo in un modulo specifico avremmo potuto mettere il nome del modulo
  providedIn: 'root'
})
export class ServizioProvaService {

  automobili = [
    {
      marca: 'Fiat',
      modello: '500',
      cilindrata: 1200,
      prezzo: 10000
    },
    {
      marca: 'Ford',
      modello: 'Fiesta',
      cilindrata: 1400,
      prezzo: 12000
    },
    {
      marca: 'Opel',
      modello: 'Corsa',
      cilindrata: 1600,
      prezzo: 13000
    }
  ]

  constructor() { }
}
