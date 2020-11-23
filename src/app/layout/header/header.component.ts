import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {User} from "../../models/user/user.model";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  currentUser: User;

  constructor(
    private authService: AuthService,
    private router: Router,
    private userService: UserService) {
  }

  ngOnInit(): void {
    if (this.isLoggedIn()) {
      this.userService.getCurrentProfile()
        .subscribe(
          data => {
            this.currentUser = data;
          }
        );
    }
  }


  isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }

  logOut() {
    return this.authService.logOut();
  }
}
