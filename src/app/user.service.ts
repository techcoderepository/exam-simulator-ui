import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppConfig } from './config/app-config';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<any> {
    return this.http.get(`${AppConfig.BASE_URL}/getAllUsers`);
  }

  getUserById(userId: String): Observable<any> {
    return this.http.get(`${AppConfig.BASE_URL}/getUserById/` + userId);
  }

  deleteUser(userId: String): Observable<any> {
    return this.http.delete(`${AppConfig.BASE_URL}/deleteUser/` + userId, { responseType: 'text' });
  }

  createUser(user: Object): Observable<Object> {
    return this.http.post(`${AppConfig.BASE_URL}/createUser`, user);
  }

  updateUser(userId: String, value: any): Observable<Object> {
    return this.http.put(`${AppConfig.BASE_URL}/updateUser/` + userId, value);
  }
  validateUser(emailId: String): Observable<Object> {
  return this.http.get(`${AppConfig.BASE_URL}/validateUser/` + emailId, { responseType: 'text' });
     
  } 

}