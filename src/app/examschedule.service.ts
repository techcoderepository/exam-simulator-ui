import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppConfig } from './config/app-config';

@Injectable({
  providedIn: 'root'
})
export class ExamscheduleService {

  constructor(private http: HttpClient) { }

  saveExamSchedule(examschedule: Object): Observable<Object> {
    return this.http.post(`${AppConfig.BASE_URL}/saveExamSchedule`, examschedule);
  }

  getScheduledExamListByEmailId(emailId:String): Observable<any> {    
    return this.http.get(`${AppConfig.BASE_URL}/getScheduledExamListByEmailId/`+emailId);      
  }

  deleteByExamScheduleId(examScheduleId:string): Observable<any>{         
  return this.http.delete(`${AppConfig.BASE_URL}/deleteByExamScheduleId/`+examScheduleId);   
  }  
}
