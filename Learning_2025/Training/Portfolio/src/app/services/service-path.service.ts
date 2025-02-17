import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ServicePathService {
  private profilePicturePath: string = 'assets/img/small.jpg'; // Percorso relativo corretto

  constructor() {  
    console.log("ServicePathService inizializzato.");
  }

  getProfilePicturePath(): string {
    return this.profilePicturePath;
  }

}
