import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  ilLoggedIn = false 


  constructor() { }

  isAuthenticated(){
    return this.ilLoggedIn
  }


}
