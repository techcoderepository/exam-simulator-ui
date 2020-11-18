import { Component, OnInit } from '@angular/core';
import {FormArray,FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Certification } from '../certification';
import { CertificationService } from '../certification.service';
import { QuestionService } from '../services/question.service';

@Component({
  selector: 'app-multiple-choice-question',
  templateUrl: './multiple-choice-question.component.html',
  styleUrls: ['./multiple-choice-question.component.css']
})


export class MultipleChoiceQuestionComponent implements OnInit {
  //certification:Certification = new Certification(); 
  certificationList: Observable<Certification[]>;
  multipleChoiceQuestionForm:FormGroup; 
  controls=[];  

  constructor(private router: Router, private questionService:QuestionService,private certificationService: CertificationService) { }

ngOnInit(): void {         
  this.certificationList = this.certificationService.getCertifications();                  
  this.controls.push(new FormGroup(
    {
     answer:new FormControl('',[Validators.required]),      
     correct:new FormControl('',[Validators.required])
    }
 ));

 this.controls.push(new FormGroup(
  {
   answer:new FormControl('',[Validators.required]),      
   correct:new FormControl('',[Validators.required])
  }
));

  this.multipleChoiceQuestionForm= new FormGroup(
     {  
      certification:new FormGroup({
        certificationId:new FormControl(),
        certificationTitle:new FormControl(),
        certificationByCompany:new FormControl(),
        certificationCode:new FormControl()
      }),
      question: new FormControl('',[Validators.required]),
      answerType: new FormControl('radio'),
      answer: new FormArray(this.controls)

})
}
     track(item:any,index:number){
     return index;
     }
    onSubmit(f)
    {   
     this.questionService.addQuestion(f.value).subscribe(data => {            
       this.router.navigate(['/home']);
     }, 
     error => {
       this.router.navigate(['/addMultipleChoiceQuestion']);
     });

    }
    
  onCancel() {     
    this.router.navigate(['/home']);   
  }

  checkBoxvalue(event){           
    for (let i = 0; i < this.controls.length; i++) {            
      if(event==i){        
          this.multipleChoiceQuestionForm.value['answer'][i]['correct']="true";          
      }else{
        this.multipleChoiceQuestionForm.value['answer'][i]['correct']="false";
      }
    }
  }

  AddOptions(){
     this.controls.push(new FormGroup(
      {
       answer:new FormControl('',[Validators.required]),      
       correct:new FormControl('',[Validators.required])
      }
    ));          
   
    this.multipleChoiceQuestionForm= new FormGroup(
      {  
      certification:this.multipleChoiceQuestionForm.get('certification'),
       question:this.multipleChoiceQuestionForm.get('question'),
       answerType: this.multipleChoiceQuestionForm.get('answerType'),
       answer: new FormArray(this.controls)
 })   
  }
  RemoveOptions(){  
    this.controls.pop();  
    this.multipleChoiceQuestionForm= new FormGroup(
      { 
      certification:this.multipleChoiceQuestionForm.get('certification'), 
       certificationId:this.multipleChoiceQuestionForm.get('certificationId'), 
       question:this.multipleChoiceQuestionForm.get('question'),
       answerType: this.multipleChoiceQuestionForm.get('answerType'),
       answer: new FormArray(this.controls)
 })    
  }
}
