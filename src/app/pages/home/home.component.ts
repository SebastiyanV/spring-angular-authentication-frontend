import { SECRET_KEY } from './../../services/url.constant';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { TokenService } from '../../services/token.service';
import { User } from '../../models/user/user.model';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private authService: AuthService, private userService: UserService, private tokenService: TokenService) {
  }

  ngOnInit(): void {
  }

  isLoggedIn(): any {
    return this.authService.isLoggedIn();
  }

  isAdmin(): boolean  {
    return this.userService.isAdmin();
  }
}
