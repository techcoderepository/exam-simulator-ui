import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userFullName:string;
  userEmailId:string;  
  isLoggedInVar:boolean
  constructor(private userService: UserService, private router:Router){}
 
  ngOnInit(): void {
  }
   isLoggedIn():boolean { 
    this.userFullName = localStorage.getItem("userFullName");
    this.userEmailId = localStorage.getItem("userEmailId");
    this.isLoggedInVar =this.userService.isLoggedIn(this.router);    
    return this.isLoggedInVar;
  }
  
  onSignOut(){    
    this.userService.onSignOut(this.router);
  }
}