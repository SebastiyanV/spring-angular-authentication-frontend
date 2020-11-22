import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CURRENT_USER_DATA_URL, HTTP_OPTIONS} from "./url.constant";
import {Observable} from "rxjs";
import {User} from "../models/user/user.model";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  getCurrentProfile(): Observable<User> {
    return this.http.get<User>(CURRENT_USER_DATA_URL, HTTP_OPTIONS);
  }
}
