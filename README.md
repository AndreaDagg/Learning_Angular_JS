# Learning Angular 

# **Learning in 2021**
# **Learning in 2025**
- **Let's install Node from:** https://nodejs.org/en
- **Angular CLI:** https://v17.angular.io/cli 
- **In node command prompt:** `npm install -g @angular/cli@17`

> **ng new nome-rogetto**
> **ng new nome-rogetto --no-standalone**

> **ng serve** or **npm start**

Exectur the command in the workspace directory. If powershell policy blocks the script execution: `Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser`

### Components
The main file is app.component.ts and it's the logic, the template is app.component.html and the style is app.component.css. 
Poi possiamo creare ogni componente che volgiamo ad esempio clienti.componenti. 
In @Component ansiamo a definire quali sono i file Templarte e style. 

Genera un nuovo componente 
> **ng g c name** OR **ng generate component NOME**

Importare un componente in un altro componente: importare il componente nell'header e po aggiungerlo all'array del decodratore **imports**

N.B. Nella versione standalone per utilizzare il componente va dichiarato nel main.ts (vedi corso udemy)

### Angular Matirial 
https://material.angular.io/
Va importato per ogni progetto con il comando: 

> ng add @angular/material

### NgIF && NgFor
importare ```import { NgFor, NgIf } from '@angular/common';``` in app.component.ts e poi ```..., NgFor, NgIf ..``` nell'array Imports:[...] del decoratore

### EP.6 - data binding
Permette di avere elementi dinamici 

> ONE-WAY: string interpolation, property binding (queste due mandano qualcosa da Type Script verso l'utente), event binding (manda qualcosa dall'utente a Type Scritp)

> TWO-WAY: two way binding (Possono esserci situazioni in cui prendiamo dei dati da Type Scritp ma se succede qualcosa li cambiamo, es. FORM)

Property binding [value]="cani[0].nome" → l'input mostra il valore attuale di cani[0].nome.
Event binding (input)="cani[0].nome = $event.target.value" → aggiorna il valore di cani[0].nome quando l'utente digita qualcosa.
Angular semplifica tutto con [(ngModel)], che unisce i due binding in uno solo.

### @Input() e @Output()

#### @Input()
`@Input()` permette al componente figlio di ricevere dati dal componente padre.  
Il padre passa un valore al figlio utilizzando la property binding `[prop]="valore"`.

Esempio:  

_Componente padre (`parent.component.html`)_
```html
<app-user [name]="userName"></app-user>
```

_Componente figlio (`user.component.ts`)_
```typescript
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user',
  template: `<p>Nome: {{ name }}</p>`
})
export class UserComponent {
  @Input() name!: string;
}
```

---

#### @Output()
`@Output()` permette al componente figlio di inviare eventi al componente padre tramite `EventEmitter`.  
Il padre può intercettare l'evento e rispondere con un metodo.

Esempio:  

_Componente figlio (`user.component.ts`)_
```typescript
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user',
  template: `<button (click)="selectUser()">Seleziona</button>`
})
export class UserComponent {
  @Output() userSelected = new EventEmitter<void>();

  selectUser() {
    this.userSelected.emit();
  }
}
```

_Componente padre (`parent.component.html`)_
```html
<app-user (userSelected)="onUserSelected()"></app-user>
```

_Componente padre (`parent.component.ts`)_
```typescript
export class ParentComponent {
  onUserSelected() {
    console.log("Utente selezionato!");
  }
}
```

Con `@Input()` e `@Output()`, Angular facilita la comunicazione tra componenti in modo strutturato e modulare. 🚀



### EP. 20 - Creare una direttiva
Generiamo al direttiva e aggiungiamo l'import in AppModule e anche in declaration

> ng generate directive nome_direttiva  OR ng g d nome_direttiva 

import { nome_direttiva } from './direttive/nome_direttiva.directive';

### EP.22 - Service
Permettono di comunicare tra i componenti anche se non hanno una relazioen padre-figlio 
E' buona prassi non creare componenti con troppe logioche all'interno perché ha come obiettivo solo quello di mandare a schermo gli elementi

> ng g s servizio-prova

Poi nel componente in cui vogliamo usufruire del servizio, nel costruttore passiamo il parametro 
``` constructor(private servizioProva: ServizioProvaService) { servizioProva.getQualcosa() } ```

### EP.23 - Routing
Passare da un componente ad un altro. Angular è single page c'è solo index, quindi per spostarsi c'è il routing, fa finta di passare. 
Il modulo che si occupa di questo è **app-routing.module.ts** che si genera all'inizialòizzazione del progetto se si mette YES, oppure si fa dopo con **ng g module app-routing --flat --module=app**

- Dopo aver messo la path in **Routes = [ { path: '' .... }]** mettere il tag ``<router-outlet> <router-outlet>`` in questo tag si alternano i componenti che si selezionano nella path. 
### EP.27 - Auth 
Gestisce le autorizzazioni. E' importante per correttezza creare una cartella auth e generare il service auth all'interno 

> ng g s auth/auth 

Successivamente si genera la guardia
> ng g guard auth/auth 