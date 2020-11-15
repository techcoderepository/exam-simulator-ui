import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { User} from '../User';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  user:User= new User();
  constructor(private userService: UserService,   private router: Router) { }
  ngOnInit(): void {
  }

  onSubmit() {        
    this.userService.validateUser(this.user.emailId).subscribe(data => {               
      if(data != null) {  
        this.user=data;          
        localStorage.setItem("userFullName", this.user.fullName);
        localStorage.setItem("emailId", this.user.emailId);
        this.router.navigate(['/scheduledexamslist']);
        } else {          
          this.router.navigate(['/signin']);
        }
    }, 
    error => {      
      this.router.navigate(['/signin']);
    }); 
  }

  onCancel(){    
    this.router.navigate(['/home']);
  }

}
