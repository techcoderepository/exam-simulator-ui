import { Observable } from "rxjs";
import { Users } from "../Users";
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import { UserService } from "../user.service";

@Component({
  selector: "app-user-list",
  templateUrl: "./user-list.component.html",
  styleUrls: ["./user-list.component.css"]
})
export class UserListComponent implements OnInit {
  users: Observable<Users[]>;

  constructor(private userService: UserService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.users = this.userService.getAllUsers();
  }

  deleteUser(userId: String) {
    this.userService.deleteUser(userId)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }
}