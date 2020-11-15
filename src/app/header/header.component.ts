import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGaurdService } from '../security/auth-gaurd.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userFullName:string;
  emailId:string;  
  isAuthenticatedVar:boolean
  constructor(private authGaurdService: AuthGaurdService, private router:Router){}
 
  ngOnInit(): void {
  }
   isAuthenticated():boolean { 
    this.userFullName = localStorage.getItem("userFullName");
    this.emailId = localStorage.getItem("emailId");
    this.isAuthenticatedVar =this.authGaurdService.isAuthenticated();    
    return this.isAuthenticatedVar;
  }
  
  onSignOut(){    
    this.authGaurdService.onSignOut(this.router);
  }
}
