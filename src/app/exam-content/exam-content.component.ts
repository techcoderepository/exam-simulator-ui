import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { on } from 'process';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-exam-content',
  templateUrl: './exam-content.component.html',
  styleUrls: ['./exam-content.component.css']
})
export class ExamContentComponent implements OnInit {
  qn: number = 1;
  isChecked: boolean = false;
  btnDisabledNext: boolean;
  isButtonVisible = false;
  qns: string;
  options=[];
  optionType: string;
  isNext:string = "Skip"
  Question = [
    {qns:"What is java", options:[" OOP1"," programming1"," Scripting1"," HTML1"],optType:"Radio", selection:[]},
    {qns:"What is Class", options:[" OOP2"," programming2"," Scripting2"," HTML2"], optType:"Checkbox",selection:[]},
    {qns:"What is Class", options:[" OOP3"," programming3"," Scripting3"," HTML3"," Extra"],optType:"Checkbox",selection:[]},
    {qns:"What is Class", options:[" OOP4"," programming4"," Scripting4"," HTML4"],optType:"Radio",selection:[]},
    {qns:"What is Class", options:[" OOP5"," programming5"," Scripting5"," HTML5"],optType:"Checkbox",selection:[]},
    {qns:"What is Class", options:[" OOP6"," programming6"," Scripting6"," HTML6"],optType:"Checkbox",selection:[]},
    {qns:"What is Class", options:[" OOP6"," programming6"," Scripting6"," HTML6"],optType:"Checkbox",selection:[]}
  ];
  secondsCounter = interval(1000);
  second: number = 10;
  minute:number = 1;
  defaultChoice = " OOP1"
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    let resp = this.http.get("https://reqres.in/api/users");
    resp.subscribe((data)=>{
      
      data={
        "user": {
            "userId": "bhukumar",
            "firstName": null,
            "lastName": "Kumar",
            "createdBy": null,
            "createdDate": null,
            "modifiedBy": null,
            "modifiedDate": null
        },
        "certification": {
            "certificationId": 1,
            "certificationCode": "1Z0-071",
            "certificationTitle": "Oracle Database SQL",
            "certificationByCompany": "Oracle",
            "createdBy": null,
            "createdDate": null,
            "modifiedBy": null,
            "modifiedDate": null
        },
        "question": {
            "questionId": 101,
            "question": "Demo to Prashanth",
            "answers": [
                {
                    "answerId": 1,
                    "answer": "demo answer",
                    "correct": true,
                    "question": 101
                },
                {
                    "answerId": 2,
                    "answer": "demo answer1",
                    "correct": false,
                    "question": 101
                },
                {
                    "answerId": 3,
                    "answer": "demo answer2",
                    "correct": true,
                    "question": 101
                }
            ]
        },
        "answer": {
            "answerId": 3,
            "answer": "demo answer2",
            "correct": true,
            "question": 101
        },
        "userResponse": true,
        "createdBy": null,
        "createdDate": null,
        "modifiedBy": null,
        "modifiedDate": null
    };
    console.log(data['question'])
    });
    this.startTimer();
    this.qns=this.Question[0].qns;
    this.options=this.Question[0].options;
    this.optionType=this.Question[0].optType;
    this.defaultChoice = this.Question[0].selection[0];
  }
  onNextClick(event){
    if(this.qn == this.Question.length ){
      this.isNext="submit";
    }
    if(this.qn <=this.Question.length-1){
      this.qn+=1;
      this.qns=this.Question[this.qn-1].qns;
      this.options=this.Question[this.qn-1].options;
      this.defaultChoice = this.Question[this.qn-1].selection[0];
      this.optionType=this.Question[this.qn-1].optType;
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
      console.log(this.Question);
      this.qn-=1;
      this.qns=this.Question[this.qn-1].qns;
      this.options=this.Question[this.qn-1].options;
      this.defaultChoice = this.Question[this.qn-1].selection[0];
      this.optionType=this.Question[this.qn-1].optType;
    }else{
      if(this.qn == 1){
        this.isButtonVisible =false;
        console.log(this.Question);
      }
      
    }
    
  }
  onOptClick($event){
    this.isNext="Next";
    console.log($event.target.value)
    this.Question[this.qn-1].selection[0]=$event.target.value;
    
  }
  onItemChange(value){
    console.log(value)   ; 
 }
  startTimer(){
    this.secondsCounter.subscribe(n =>{
      this.second -=1;      
        if(this.second == 0){
          this.second=59;
          if(this.minute>0){
            this.minute -=1;
          }else{
            alert("Time Over");
             window.location.assign("http://localhost:4200/ExamInstruction");
          
          }   
        }
      
    }); 
  }
  onSubmit(){
    console.log(this.Question);
  }
  getSelection(option){
    if(this.Question[this.qn-1].selection[0]===option){
      return true;
    }
  }

}
