import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Question } from '../model/question';
import { AppConfig } from '../config/app-config';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http: HttpClient) { }

  addQuestion(question: JSON): Observable<Object> {    
    return this.http.post(`${AppConfig.BASE_URL}/addQuestion`, question);
  }

  getAllQuestions():Observable<any> {
    return this.http.get(`${AppConfig.BASE_URL}/getAllQuestions`);
  }
}