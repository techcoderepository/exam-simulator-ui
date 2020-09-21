import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Question } from '../question';
import { QuestionService } from '../question.service';

@Component({
  selector: 'app-multiple-choice-question',
  templateUrl: './multiple-choice-question.component.html',
  styleUrls: ['./multiple-choice-question.component.css']
})
export class MultipleChoiceQuestionComponent implements OnInit {
 question:Question = new Question();
  constructor(private questionService:QuestionService, private router:Router) { }

  ngOnInit(): void {
  }

  save() {
    this.questionService.addQuestion(this.question).subscribe(data => {
      console.log(data)
      this.question = new Question();      
    }, 
    error => console.log(error));
  }

  onSubmit() {    
    this.save();    
  }

}
