import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {UserService} from '../user.service';
import { User } from '../User';


@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  userId:String;
  user:User;
  constructor(private route: ActivatedRoute,private router: Router,   private userService: UserService) { }

  ngOnInit() {
    this.user = new User();
    this.userId = this.route.snapshot.params['userId'];
    
    this.userService.getUserById(this.userId)
      .subscribe(data => {        
        this.user = data;
      }, error => console.log(error));
  }

  updateUser() {
    this.userService.updateUser(this.userId, this.user)
      .subscribe(data => {
        console.log(data);
        this.user = new User();
        this.gotoList();
      }, error => console.log(error));
  }

  onSubmit() {
    this.updateUser();    
  }

  gotoList() {
    this.router.navigate(['/users']);
  }
}
