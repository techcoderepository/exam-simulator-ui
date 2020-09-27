import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-scheduledexamslist',
  templateUrl: './scheduledexamslist.component.html',
  styleUrls: ['./scheduledexamslist.component.css']
})
export class ScheduledexamslistComponent implements OnInit {
   constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.userService.checkUserSession(this.router);     
  }

}
