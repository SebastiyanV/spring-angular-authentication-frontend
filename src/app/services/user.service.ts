import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { ALL_USERS_URL, CURRENT_USER_DATA_URL, HTTP_OPTIONS, USER_BY_ID } from './url.constant';
import { Observable } from 'rxjs';
import { User } from '../models/user/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  getCurrentProfile(): Observable<User> {
    return this.http.get<User>(CURRENT_USER_DATA_URL, HTTP_OPTIONS);
  }

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(ALL_USERS_URL, HTTP_OPTIONS);
  }

  getUserById(userId: string): Observable<any> {
    return this.http.get<User>(USER_BY_ID + '' + userId, HTTP_OPTIONS);
  }
}
