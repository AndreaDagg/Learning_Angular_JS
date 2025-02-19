// Importiamo NgModule dal core di Angular e BrowserModule questi sono essenziali per far funzioanre i moduli e componenti 
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
/**
 * Importiamo il componente principale dell'applicazione. 
 * Per importare un componente, dobbiamo specificare il percorso relativo del file in cui è definito e aggiungerlo alll''array delcarations.
 */
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { TasksComponent } from "./tasks/tasks.component";
import { SharedModule } from './shared/card/shared.module';
import { NewTaskComponent } from './tasks/new-task/new-task.component';
import { TaskComponent } from './tasks/task/task.component';
import { TasksModule } from './tasks/tasks.module';


/**
 * Il decoratore @NgModule serve a definire un modulo Angular
 * Il decoratore @NgModule() trasforma la classe sottostante (AppModule) in un modulo Angular.
 * Il parametro { declarations: [] } è un oggetto di configurazione che indica quali componenti, direttive o pipe appartengono a questo modulo.
 * Vanno aggiunti tutti i componenti che vogliamo utilizzare nell'applicazione e che vengono utilizzati dagli altri componenti a casacata (vedi HTML)
 * Il parametro { bootstrap: [] } è un array di componenti che devono essere avviati quando l'applicazione viene avviata. Fa capire ad Angular quale componente avviare
 *  -- ESEMPIO DI COMBINAZIONE DI COMPNENTI STANDALONE E NON STANDALONE --
 * Il parametro { imports: [] } è un array di moduli STANDALONE che devono essere importati in questo modulo. In questo caso importiamo il modulo BrowserModule.
 * In import andiao a registrare i componenti proveienti da altre sezioni del codice che vengano utilizzati all'interno del modulo principale
 * In questo modo scomponiamo l'applicazione in moduli più piccoli e facili da gestire (es.tasks.module.ts)
 * */
@NgModule({
    declarations: [AppComponent, HeaderComponent, UserComponent],       
    bootstrap: [AppComponent], 
    imports: [BrowserModule, SharedModule, TasksModule]
})

// Definiamo la classe del modulo principale dell'applicazione
export class AppModule {

}
