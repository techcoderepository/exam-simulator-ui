import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { strict } from 'assert';
import { Certification } from '../certification';
import { CertificationService } from '../certification.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-certification',
  templateUrl: './certification.component.html',
  styleUrls: ['./certification.component.css']
})
export class CertificationComponent implements OnInit {
  certification: Certification = new Certification();
  constructor(private userService: UserService, private certificationService: CertificationService,   private router: Router) { }  
  
  ngOnInit(): void {
    this.userService.checkUserSession(this.router);     
  }

  onSubmit() {        
    this.certificationService.addCertification(this.certification).subscribe(data => {            
      this.certification = new Certification();
      this.router.navigate(['/scheduledexamslist']);
    }, 
    error => {
      console.log(error);
      this.router.navigate(['/addcertification']);
    });   
  }

  onCancel(){    
    this.router.navigate(['/scheduledexamslist']);
  }

}
