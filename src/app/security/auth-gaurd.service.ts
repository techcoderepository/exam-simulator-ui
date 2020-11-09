import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGaurdService implements CanActivate{

  constructor(public router: Router) {}
  canActivate(): boolean {
    if (!this.isAuthenticated()) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }

  public isAuthenticated(): boolean {
      if (localStorage.getItem("userEmailId") == null) {      
        return false;
      } else{      
        return true;
      }    
  }
}
