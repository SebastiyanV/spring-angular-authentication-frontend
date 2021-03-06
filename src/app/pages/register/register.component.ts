import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {UserRegister} from "../../models/user-register.model";
import {NavigationExtras, Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit, OnDestroy {
  registerForm: FormGroup;
  userRegisterModel: UserRegister;
  successRegister: boolean;
  errors: Array<string>;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.successRegister = false;
    this.errors = [];
  }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
    })
  }

  ngOnDestroy(): void {
    this.successRegister = false;
  }


  get email() {
    return this.registerForm.get('email')
  };

  get password() {
    return this.registerForm.get('password')
  };

  get firstName() {
    return this.registerForm.get('firstName')
  };

  get lastName() {
    return this.registerForm.get('lastName')
  };

  onSubmit() {
    this.errors = [];

    if (this.registerForm.invalid) {
      this.errors.push("Please fill all fields correctly.");
      return;
    }

    this.userRegisterModel = new UserRegister();
    this.userRegisterModel.email = this.registerForm.get('email').value;
    this.userRegisterModel.password = this.registerForm.get('password').value;
    this.userRegisterModel.firstName = this.registerForm.get('firstName').value;
    this.userRegisterModel.lastName = this.registerForm.get('lastName').value;
    this.authService.register(this.userRegisterModel)
      .subscribe(
        data => {
          this.successRegister = true;
        },
        error => {
          this.errors.push(error.error.message)
        }
      )
  }


}
