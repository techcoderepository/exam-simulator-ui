import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Examschedule } from '../examschedule';
import { ExamscheduleService } from '../examschedule.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-scheduledexamslist',
  templateUrl: './scheduledexamslist.component.html',
  styleUrls: ['./scheduledexamslist.component.css']
})
export class ScheduledexamslistComponent implements OnInit {   
  examSchedule: Examschedule = new  Examschedule();
  scheduledExamList: Observable<Examschedule[]>;
  successss:Observable<String[]>;;
  
  constructor(private examscheduleService:ExamscheduleService, private userService: UserService, private router: Router) { }

  ngOnInit(): void {    
    this.userService.checkUserSession(this.router); 
    this.scheduledExamList = this.examscheduleService.getScheduledExamListByEmailId(localStorage.getItem("userEmailId"));           
  }
  onReschedule(): void {    
    this.router.navigate(['/scheduleexamdetail']);
  }
  onCancelExam(examScheduleId:string):void {    
      if(confirm("Are you sure to delete?")) {
         this.examscheduleService.deleteByExamScheduleId(examScheduleId).subscribe(data => {           
          this.router.navigate(['/scheduledexamslist']);
          },
            error => {       
              this.router.navigate(['/scheduleexamdetail']);
            });  
    this.router.navigate(['/takeexam']);    
    }              
  }

  onTakeExam(): void {
    this.router.navigate(['/takeexam']);
  }
}
