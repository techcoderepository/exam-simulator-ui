import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserQuestionResponse } from '../model/question';
import { QuestionService } from '../services/question.service';

@Component({
  selector: 'app-exam-result',
  templateUrl: './exam-result.component.html',
  styleUrls: ['./exam-result.component.css']
})
export class ExamResultComponent implements OnInit {  
  numCorrectAnswer:number=0;
  userQuestionResponseList:Array<UserQuestionResponse>;
  flag:Boolean=true;

  constructor(private questionService:QuestionService, private _Activatedroute:ActivatedRoute) { }
  

  ngOnInit(): void {
        this.questionService.getExamResult(localStorage.getItem('emailId')).subscribe(data=>{
        this.userQuestionResponseList=data;  
        this.calculateExamScore();                
        });

          
  }

  calculateExamScore(): void{
    console.log(this.userQuestionResponseList);
    for (let i = 0; i < this.userQuestionResponseList.length; i++){
      this.flag=true;
       for(let j=0; j< this.userQuestionResponseList[i].optionResponse.length; j++){
         if(this.userQuestionResponseList[i].optionResponse[j].answer.correct != this.userQuestionResponseList[i].optionResponse[j].userResponse){
            this.flag=false;
            break;
         }
    } 
    if(this.flag){
      this.numCorrectAnswer++ ;
    }
  }
}

}
