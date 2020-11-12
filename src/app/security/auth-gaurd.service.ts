import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGaurdService implements CanActivate{

  constructor(public router: Router) {}
  canActivate(): boolean {
    if (this.isAuthenticated()) {      
      return true;
    }else{
      this.router.navigate(['/signin']);
      return false;
    }
    
  }

  public isAuthenticated(): boolean {    
      if (localStorage.getItem("userEmailId") != null) {      
        return true;
      } else{      
        return false;
      }    
  }

  onSignOut(router: Router) {    
    localStorage.removeItem("userEmailId");
    localStorage.removeItem("userFullName");
    router.navigate(['/home']);
  }
}
