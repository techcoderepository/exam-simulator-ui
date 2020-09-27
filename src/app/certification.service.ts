import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CertificationService {

  constructor(private http: HttpClient) { }

  addCertification(certification: Object): Observable<Object> {
    return this.http.post('http://localhost:8085/addCertification', certification);
  }

  getCertifications(): Observable<any> {
    return this.http.get('http://localhost:8085/getCertifications');
  }
}
