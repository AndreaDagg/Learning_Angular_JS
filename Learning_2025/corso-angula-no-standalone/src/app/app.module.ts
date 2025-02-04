import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProvaComponent } from './prova/prova.component';

// Angular Material 
// Import the Angular Material modules after Angular's BrowserModule, as the import order matters for NgModules.
// The Angular Material modules are imported after the BrowserModule to ensure that the Angular Material components are available for use in the application.
// After importing the Angular Material modules, add them to the imports array in the @NgModule decorator. 
// The imports array contains a list of external modules that the application needs.
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    ProvaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
