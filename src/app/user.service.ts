import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<any> {
    return this.http.get('http://localhost:8085/getAllUsers');
  }

  getUserById(userId: String): Observable<any> {
    return this.http.get('http://localhost:8085/getUserById/' + userId);
  }

  deleteUser(userId: String): Observable<any> {
    return this.http.delete('http://localhost:8085/deleteUser/' + userId, { responseType: 'text' });
  }

  createUser(user: Object): Observable<Object> {
    return this.http.post('http://localhost:8085/createUser', user);
  }

  updateUser(userId: String, value: any): Observable<Object> {
    return this.http.put('http://localhost:8085/updateUser/' + userId, value);
  }
  validateUser(emailId: String): Observable<Object> {
    return this.http.get('http://localhost:8085/validateUser/' + emailId, { responseType: 'text' });
  }

  checkUserSession(router: Router) {               
    if (localStorage.getItem("userEmailId") == null) {
      router.navigate(['/signin']);
    }
  }

  onSignOut(router: Router) {    
    localStorage.removeItem("userEmailId");
    localStorage.removeItem("userFullName");
    router.navigate(['/home']);
  }

  isLoggedIn(router: Router) {                  
    if (localStorage.getItem("userEmailId") == null) {      
      return false;
    } else{      
      return true;
    }
  }


}