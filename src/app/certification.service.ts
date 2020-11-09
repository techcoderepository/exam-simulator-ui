import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppConfig } from './config/app-config';

@Injectable({
  providedIn: 'root'
})
export class CertificationService {

  constructor(private http: HttpClient) { }

  addCertification(certification: Object): Observable<Object> {
    return this.http.post(`${AppConfig.BASE_URL}/addCertification`, certification);
  }

  getCertifications(): Observable<any> {
    return this.http.get(`${AppConfig.BASE_URL}/getCertifications`);
  }
}
