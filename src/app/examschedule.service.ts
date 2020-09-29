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

  getScheduledExamList(): Observable<any> {
    return this.http.get('http://localhost:8085/getScheduledExamList');
  }

}
