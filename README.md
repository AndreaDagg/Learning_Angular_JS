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

The main file is app.component.ts and it's the logic, the template is app.component.html and the style is app.component.css. 
Poi possiamo creare ogni componente che volgiamo ad esempio clienti.componenti. 
In @Component ansiamo a definire quali sono i file Templarte e style. 

> **ng g c name** OR **ng generate component NOME**

Genera un nuovo componente 

### Angular Matirial 
https://material.angular.io/
Va importato per ogni progetto con il comando: 

> ng add @angular/material

### EP.6 - data binding
Permette di avere elementi dinamici 

> ONE-WAY: string interpolation, property binding (queste due mandano qualcosa da Type Script verso l'utente), event binding (manda qualcosa dall'utente a Type Scritp)

> TWO-WAY: two way binding (Possono esserci situazioni in cui prendiamo dei dati da Type Scritp ma se succede qualcosa li cambiamo, es. FORM)

Property binding [value]="cani[0].nome" → l'input mostra il valore attuale di cani[0].nome.
Event binding (input)="cani[0].nome = $event.target.value" → aggiorna il valore di cani[0].nome quando l'utente digita qualcosa.
Angular semplifica tutto con [(ngModel)], che unisce i due binding in uno solo.

### EP. 20 - Creare una direttiva
Generiamo al direttiva e aggiungiamo l'import in AppModule e anche in declaration

> ng generate directive nome_direttiva  OR ng g d nome_direttiva 

import { nome_direttiva } from './direttive/nome_direttiva.directive';

### EP.22 - Service
Permettono di comunicare tra i componenti anche se non hanno una relazioen padre-figlio 
E' buona prassi non creare componenti con troppe logioche all'interno perché ha come obiettivo solo quello di mandare a schermo gli elementi

> ng g s servizio-prova

### EP.23 - Routing
Passare da un componente ad un altro. Angular è single page c'è solo index, quindi per spostarsi c'è il routing, fa finta di passare. 
Il modulo che si occupa di questo è **app-routing.module.ts** che si genera all'inizialòizzazione del progetto se si mette YES, oppure si fa dopo con **ng g module app-routing --flat --module=app**

### EP.27 - Auth 
Gestisce le autorizzazioni. E' importante per correttezza creare una cartella auth e generare il service auth all'interno 

> ng g s auth/auth 

Successivamente si genera la guardia
> ng g guard auth/auth 