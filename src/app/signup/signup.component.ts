import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { Users } from '../Users';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
 user: Users = new Users();
  constructor(private userService: UserService,   private router: Router) { }
  ngOnInit(): void {
  }

  onSubmit() {    
    console.log("hello"); 
    this.userService.createUser(this.user).subscribe(data => {
      console.log(data)
      this.user = new Users();

     // this.gotoList();
    }, 
    error => console.log(error));    
  }

}
