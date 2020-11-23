import {Component, OnInit} from '@angular/core';
import {TokenService} from "../../services/token.service";
import {User} from "../../models/user/user.model";
import {UserService} from "../../services/user.service";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
  }

  isLoggedIn() {
    return this.authService.isLoggedIn();
  }
}
