import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { Users } from '../Users';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  user: Users = new Users();
  constructor(private userService: UserService,   private router: Router) { }
  ngOnInit(): void {
  }

  onSubmit() {        
    this.userService.validateUser(this.user.emailId).subscribe(data => {      
      console.log(data);
      this.user = new Users();
      if(data =="success") {
        this.router.navigate(['/scheduledexamslist']);
        } else {
          this.router.navigate(['/signin']);
        }
    }, 
    error => {
      console.log(error);
      this.router.navigate(['/signin']);
    });   
  }

}
