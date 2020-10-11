import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http: HttpClient) { }

  addQuestion(question: Object): Observable<Object> {
    return this.http.post('http://localhost:8085/addQuestion', question);
  }
}