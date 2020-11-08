import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { interval, Observable, pipe } from 'rxjs';
import { async } from 'rxjs/internal/scheduler/async';
import { Question } from '../model/question';
import { QuestionService } from '../services/question.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-start-exam',
  templateUrl: './start-exam.component.html',
  styleUrls: ['./start-exam.component.css']
})
export class StartExamComponent implements OnInit {
  qn: number = 1;
  isChecked: boolean = false;
  btnDisabledNext: boolean;
  isButtonVisible = false;
  qns: String;
  options=[];
  optionType: String;
  isNext:string = "Skip"    
  questionList:Array<Question>;
  secondsCounter = interval(1000);
  second: number = 10;
  minute:number = 1;
  defaultChoice = String  
  question: Question;
  constructor(private questionService:QuestionService ,private router: Router, private http:HttpClient, private userService: UserService,) { }

  myInit(){         
  console.log(this.questionList);   
  this.optionType=this.questionList[0].answerType;  
  this.options=this.questionList[0].answer;  
  this.qns=this.questionList[0].question; 
  //this.questionList[0].selection[0] = '';   
}
  ngOnInit(): void{
    this.userService.checkUserSession(this.router);             
    this.questionService.getAllQuestions().subscribe(data=>{
    this.questionList=data;              
    this.myInit();
    });    
    this.startTimer();
  }
  
  onNextClick(event){
    if(this.qn == this.questionList.length ){
      this.isNext="submit";
    }
    if(this.qn <=this.questionList.length-1){
      this.qn+=1;
      this.qns=this.questionList[this.qn-1].question;
      this.options=this.questionList[this.qn-1].answer;
      //this.defaultChoice=this.questionList[this.qn-1].selection[0]="";
      this.optionType=this.questionList[this.qn-1].answerType;
      this.isButtonVisible = true;
      this.isNext="Skip";
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
      this.qns=this.questionList[this.qn-1].question;
      this.options=this.questionList[this.qn-1].answer;
      //this.defaultChoice = this.questionList[this.qn-1].selection[0];
      this.optionType=this.questionList[this.qn-1].answerType;
    }else{
      if(this.qn == 1){
        this.isButtonVisible =false;        
      }
      
    }
    
  }
  onOptClick($event){
    this.isNext="Next";    
    //this.questionList[this.qn-1].selection[0]=$event.target.value;    
  }
  onItemChange(value){    
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
