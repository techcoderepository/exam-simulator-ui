import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../User';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
 user: User = new User();
  constructor(private userService: UserService,   private router: Router) { }
  ngOnInit(): void {
  }

  onSubmit() {        
    this.userService.createUser(this.user).subscribe(data => {
      this.user=data;                        
      localStorage.setItem("emailId", this.user.emailId);
      localStorage.setItem("userFullName", this.user.fullName);
      this.router.navigate(['/scheduledexamslist']);
    }, 
    error => {
      this.router.navigate(['/signup']);
    });   
  }

}
