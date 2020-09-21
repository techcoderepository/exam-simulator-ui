import { Component, OnInit } from '@angular/core';
import { Router  } from '@angular/router';
import { UserService } from '../user.service';
import { Users } from '../Users';


@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {

  user: Users = new Users();
  submitted = false;

  constructor(private userService: UserService,   private router: Router) { }

  ngOnInit(): void {
  }

  newUser(): void {
    this.submitted = false;
    this.user = new Users();
  }

  save() {
    this.userService.createUser(this.user).subscribe(data => {
      console.log(data)
      this.user = new Users();
      this.gotoList();
    }, 
    error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/users']);
  }

}
