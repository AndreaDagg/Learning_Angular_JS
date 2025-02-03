import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// DECORATORE @Component per definire il componente 
// Altriemnti angular non sa che questa è una classe componente. 
// Il decoratore @Component è un oggetto che definisce le caratteristiche del componente
// selector: 'app-root' è il selettore CSS che identifica il componente all'interno del template HTML
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'corso-angular';
}
