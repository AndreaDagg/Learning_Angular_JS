import { Component } from '@angular/core';
import { ServicePathService } from '../services/service-path.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  
  profilePicturePath: string; // Usa `string` invece di `String`

  constructor(private servicePathService: ServicePathService) {
    this.profilePicturePath = servicePathService.getProfilePicturePath();
    
    console.log("Path immagine nel componente:", this.profilePicturePath); // Debug
  }
}