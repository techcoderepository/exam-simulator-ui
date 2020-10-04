import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExamscheduleService {

  constructor(private http: HttpClient) { }

  saveExamSchedule(examschedule: Object): Observable<Object> {
    return this.http.post('http://localhost:8085/saveExamSchedule', examschedule);
  }

  getScheduledExamListByEmailId(userEmailId:String): Observable<any> {    
    return this.http.get('http://localhost:8085/getScheduledExamListByEmailId/'+userEmailId);      
  }

  deleteByExamScheduleId(examScheduleId:string): Observable<Object>{      
   return this.http.delete('http://localhost:8085/deleteByExamScheduleId/'+examScheduleId);   
  }  
}
