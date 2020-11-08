import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Question } from '../model/question';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http: HttpClient) { }

  addQuestion(question: JSON): Observable<Object> {    
    return this.http.post('http://localhost:8085/addQuestion', question);
  }

  getAllQuestions():Observable<any> {
    return this.http.get('http://localhost:8085/getAllQuestions');
  }
}