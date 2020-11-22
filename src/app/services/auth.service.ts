import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {UserRegister} from "../models/user-register.model";
import {API_URL, LOGIN_URL, REGISTER_URL} from "./url.constant";
import {UserLogin} from "../models/user-login.model";
import {TokenService} from "./token.service";
import {Observable} from "rxjs";

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private tokenService: TokenService) {
  }

  isLoggedIn() {
    return this.tokenService.getToken() !== null;
  }

  public register(userRegisterModel: UserRegister): Observable<any> {
    return this.http.post(REGISTER_URL, userRegisterModel, httpOptions);
  }

  public login(userLoginModel: UserLogin): Observable<any> {
    return this.http.post(LOGIN_URL, userLoginModel, httpOptions);
  }

  logOut() {
    this.tokenService.removeToken();
  }
}
