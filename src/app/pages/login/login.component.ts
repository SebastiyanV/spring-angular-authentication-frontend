import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {UserLogin} from "../../models/user-login.model";
import {UserRegister} from "../../models/user-register.model";
import {Token} from "@angular/compiler";
import {TokenService} from "../../services/token.service";
import jwtDecode from "jwt-decode";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  userLoginModel: UserLogin;
  successRegisterMessage: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private tokenService: TokenService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    // this.successRegisterMessage = this.router.getCurrentNavigation().extras.state.k;
    this.loginForm = this.formBuilder.group({
      email: ['subi', Validators.required],
      password: ['123', Validators.required]
    })
  }

  onSubmit() {
    this.userLoginModel = new UserLogin();
    this.userLoginModel.email = this.loginForm.get('email').value;
    this.userLoginModel.password = this.loginForm.get('password').value;
    this.authService.login(this.userLoginModel).subscribe(
      data => {
        this.tokenService.saveToken(data.token);
        this.tokenService.saveUser(data);
        // console.log(data.token)
        // console.log(jwtDecode(data.token))
      },
      error => {
        console.log(error)
      }
    )
  }
}