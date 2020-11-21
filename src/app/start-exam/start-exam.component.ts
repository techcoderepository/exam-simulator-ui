import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { interval } from 'rxjs';
import { Question, UserQuestionResponse } from '../model/question';
import { QuestionService } from '../services/question.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-start-exam',
  templateUrl: './start-exam.component.html',
  styleUrls: ['./start-exam.component.css']
})
export class StartExamComponent implements OnInit {
  qn: number = 1;
  isChecked: boolean = true;
  btnDisabledNext: boolean;
  isButtonVisible = false;
  qns: String;
  options=[];
  optionType: String;
  isNext:string = "Skip"    
  questionList:Array<UserQuestionResponse>;
  secondsCounter = interval(1000);
  second: number = 10;
  minute:number = 1;
  defaultChoice = String  
  question: Question;
  userQuestionResponse:UserQuestionResponse;
  constructor(private questionService:QuestionService ,private router: Router, private http:HttpClient, private userService: UserService,private _Activatedroute:ActivatedRoute) { }

  myInit(){            
  this.optionType=this.questionList[0].question.answerType;  
  this.options=this.questionList[0].optionResponse;  
  this.qns=this.questionList[0].question.question; 
  this.userQuestionResponse=this.questionList[0]; 
}
  ngOnInit(): void{    
    this.questionService.getUserQuestionsByUser(localStorage.getItem('emailId'), this._Activatedroute.snapshot.paramMap.get("certificationId")).subscribe(data=>{
    this.questionList=data;      
    console.log(data);        
    this.myInit();
    });    
    this.startTimer();
  }
  
  onNextClick(event){
    if(this.qn == this.questionList.length ){
      this.isNext="submit";
    }
    if(this.qn <=this.questionList.length-1){
      this.userQuestionResponse=this.questionList[this.qn-1];
      console.log("previousq");
      console.log(this.userQuestionResponse);
      this.qn+=1;
      this.qns=this.questionList[this.qn-1].question.question;
      this.options=this.questionList[this.qn-1].optionResponse;      
      this.optionType=this.questionList[this.qn-1].question.answerType;
      this.isButtonVisible = true;
      this.isNext="Skip";
      this.userQuestionResponse=this.questionList[this.qn-1];
      console.log("currentq");
      console.log(this.userQuestionResponse);
    }else{
      if(this.isNext=="submit"){
        this.onSubmit();
      }
    }
    
  }
  onPrevClick(event){
    console.log(this.btnDisabledNext);
    if(this.qn >= 2){      
      this.qn-=1;
      this.qns=this.questionList[this.qn-1].question.question;
      this.options=this.questionList[this.qn-1].optionResponse;
      this.optionType=this.questionList[this.qn-1].question.answerType;
    }else{
      if(this.qn == 1){
        this.isButtonVisible =false;        
      }
      
    }
    
  }
  onOptClick(event){ 
    this.isNext="Next";
       for (let i = 0; i < this.options.length; i++) {            
        if(event==i){        
            this.userQuestionResponse.optionResponse[i].userResponse=true;
        }else{
          this.userQuestionResponse.optionResponse[i].userResponse=false;
        }
      } 
      console.log(this.userQuestionResponse);     
  }
  
  startTimer(){
    this.secondsCounter.subscribe(n =>{
      this.second -=1;      
        if(this.second == 0){
          this.second=59;
          if(this.minute>0){
            this.minute -=1;
          }else{
            //alert("Time Over");
             //window.location.assign("http://localhost:4200/ExamInstruction");
          
          }   
        }
      
    }); 
  }
  onSubmit(){    
  }
  getSelection(option){
    //if(this.Question[this.qn-1].selection[0]===option){
      return true;
    //}
  }

}
