import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { UserQuestionResponse } from '../model/question';
import { QuestionService } from '../services/question.service';

@Component({
  selector: 'app-exam-result',
  templateUrl: './exam-result.component.html',
  styleUrls: ['./exam-result.component.css']
})
export class ExamResultComponent implements OnInit {  
  numCorrectAnswer:number=0;
  numTotalQuestion:number=0;
  persentageScore:string;
  userQuestionResponseList:Array<UserQuestionResponse>;

  flag:Boolean=true;

  constructor(private questionService:QuestionService, private _Activatedroute:ActivatedRoute) { }
  

   ngOnInit(): void {
        this.questionService.getExamResult(localStorage.getItem('emailId')).subscribe(data=>{
        this.userQuestionResponseList=data;  
        this.calculateExamScore(); 
        console.log(this.userQuestionResponseList);               
        });          
  } 

   calculateExamScore(): void{     
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
  this.numTotalQuestion= this.userQuestionResponseList.length;  
  this.persentageScore=(this.numCorrectAnswer*100/this.numTotalQuestion).toFixed(2);  
} 
  
  checkValue(answer){
  
    if(answer.userResponse){
      if(answer.answer.correct){
        return true;
      }else{
        return false;
      }
    }else{
      return false;
    }
   
  }
  checkValue1(answer){
    if(answer.userResponse){
      if(!answer.answer.correct){
        return true;
      }else{
        return false;
      }
    }else{
      return false;
    }
  }
  checkValue2(answer){
    if(answer.answer.correct){
      if(!answer.userResponse){
        return true;
      }else{
        return false;
      }
    }else{
      return false;
    }
  }


}
