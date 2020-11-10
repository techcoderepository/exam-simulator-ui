import { NgForOf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Certification } from '../certification';
import { CertificationService } from '../certification.service';
import { Examschedule } from '../examschedule';
import { ExamscheduleService } from '../examschedule.service';
import { UserService } from '../user.service';
import { Users } from '../Users';

@Component({
  selector: 'app-scheduleexamdetail',
  templateUrl: './scheduleexamdetail.component.html',
  styleUrls: ['./scheduleexamdetail.component.css']
})
export class ScheduleexamdetailComponent implements OnInit {
  certification: Certification = new Certification();
  examSchedule: Examschedule = new  Examschedule();
  user:Users = new Users();
  certificationList: Observable<Certification[]>;
  
  constructor(private examscheduleService:ExamscheduleService, private userService: UserService, private certificationService: CertificationService, private router: Router) { }

  ngOnInit(): void { 
    this.examSchedule.certification=this.certification;       
    this.certificationList = this.certificationService.getCertifications();                  
  }

  onSubmit() {    
    this.examSchedule.user=this.user;
    this.examSchedule.user.emailId=localStorage.getItem("userEmailId");
    this.examscheduleService.saveExamSchedule(this.examSchedule).subscribe(data => {           
    this.router.navigate(['/scheduledexamslist']);
    },
      error => {       
        this.router.navigate(['/scheduleexamdetail']);
      });
  }

  onCancel(){    
    this.router.navigate(['/scheduledexamslist']);
  } 

}
