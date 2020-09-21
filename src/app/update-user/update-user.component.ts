import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {Users} from '../Users';
import {UserService} from '../user.service';


@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  userId:String;
 user:Users;
  constructor(private route: ActivatedRoute,private router: Router,   private userService: UserService) { }

  ngOnInit() {
    this.user = new Users();
    this.userId = this.route.snapshot.params['userId'];
    
    this.userService.getUserById(this.userId)
      .subscribe(data => {
        console.log(data)
        this.user = data;
      }, error => console.log(error));
  }

  updateUser() {
    this.userService.updateUser(this.userId, this.user)
      .subscribe(data => {
        console.log(data);
        this.user = new Users();
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
