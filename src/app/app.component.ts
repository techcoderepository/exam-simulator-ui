import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  userFullName:string;
  userEmailId:string;  
  isLoggedInVar:boolean
  constructor(private userService: UserService, private router:Router){}
  
  ngOnInit(): void {    
    this.userFullName = localStorage.getItem("userFullName");
    this.userEmailId = localStorage.getItem("userEmailId");
  }

  isLoggedIn():boolean { 
    this.isLoggedInVar =this.userService.isLoggedIn(this.router);    
    return this.isLoggedInVar;
  }
  
  onSignOut(){    
    this.userService.onSignOut(this.router);
  }
}