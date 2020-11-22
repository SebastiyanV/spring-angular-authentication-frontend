import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services/user.service";
import {Observable} from "rxjs";
import {User} from "../../models/user/user.model";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  currentUser: User;

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.userService.getCurrentProfile()
      .subscribe(
        data => {
          this.currentUser = data;
        },
        error => {
          console.log(error)
        }
      );
  }

}
