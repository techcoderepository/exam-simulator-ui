import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Question } from '../model/question';
import { QuestionService } from '../services/question.service';

@Component({
  selector: 'app-multiple-choice-question',
  templateUrl: './multiple-choice-question.component.html',
  styleUrls: ['./multiple-choice-question.component.css']
})


export class MultipleChoiceQuestionComponent implements OnInit {
  multipleChoiceQuestionForm:FormGroup; 
  controls=[];

  constructor(private router: Router, private questionService:QuestionService) { }

ngOnInit(): void {  
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
       console.log(error);
       this.router.navigate(['/addMultipleChoiceQuestion']);
     });

    }
    
  onCancel() {     
    this.router.navigate(['/home']);   
  }

  checkCheckBoxvalue(event){           
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
       question:this.multipleChoiceQuestionForm.get('question'),
       answerType: this.multipleChoiceQuestionForm.get('answerType'),
       answer: new FormArray(this.controls)
 })   
  }
  RemoveOptions(){  
    this.controls.pop();  
    this.multipleChoiceQuestionForm= new FormGroup(
      {  
       question:this.multipleChoiceQuestionForm.get('question'),
       answerType: this.multipleChoiceQuestionForm.get('answerType'),
       answer: new FormArray(this.controls)
 })    
  }
}
