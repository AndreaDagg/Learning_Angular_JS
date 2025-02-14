import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componente-2/home/home.component';
import { AboutComponent } from './componente-2/about/about.component';
import { ContatComponent } from './componente-2/contat/contat.component';
import { ProvaComponent } from './prova/prova.component';

//Qui ci si definiscono le route dell'applicazione
const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContatComponent},
  {path: 'contact/:id', component: ContatComponent},
  {path: 'prova', component: ProvaComponent},
  //Questa route è per gestire il caso in cui l'utente inserisca un URL non valido si redirecta al componente Home
  {path: '**', redirectTo: ''}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
