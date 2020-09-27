import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-takeexam',
  templateUrl: './takeexam.component.html',
  styleUrls: ['./takeexam.component.css']
})
export class TakeexamComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.userService.checkUserSession(this.router); 
  }

}
