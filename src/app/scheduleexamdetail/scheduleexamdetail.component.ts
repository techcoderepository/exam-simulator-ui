import { NgForOf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Certification } from '../certification';
import { CertificationService } from '../certification.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-scheduleexamdetail',
  templateUrl: './scheduleexamdetail.component.html',
  styleUrls: ['./scheduleexamdetail.component.css']
})
export class ScheduleexamdetailComponent implements OnInit {
  certification: Certification = new Certification();
  certificationList: Observable<Certification[]>;

  constructor(private userService: UserService, private certificationService: CertificationService, private router: Router) { }

  ngOnInit(): void {    
    this.userService.checkUserSession(this.router);     
    this.certificationList = this.certificationService.getCertifications();                  
  }

  onSubmit() {
    /* this.certificationService.addCertification(this.certification).subscribe(data => {
      console.log(data);
      this.certification = new Certification();
      this.router.navigate(['/scheduledexamslist']);
    },
      error => {
        console.log(error);
        this.router.navigate(['/addcertification']);
      }); */
  }

}
