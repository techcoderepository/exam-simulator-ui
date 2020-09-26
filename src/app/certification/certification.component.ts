import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Certification } from '../certification';
import { CertificationService } from '../certification.service';

@Component({
  selector: 'app-certification',
  templateUrl: './certification.component.html',
  styleUrls: ['./certification.component.css']
})
export class CertificationComponent implements OnInit {
  certification: Certification = new Certification();
  constructor(private certificationService: CertificationService,   private router: Router) { }  
  ngOnInit(): void {
  }

  onSubmit() {        
    this.certificationService.addCertification(this.certification).subscribe(data => {      
      console.log(data);
      this.certification = new Certification();
      this.router.navigate(['/scheduledexamslist']);
    }, 
    error => {
      console.log(error);
      this.router.navigate(['/addcertification']);
    });   
  }

}
