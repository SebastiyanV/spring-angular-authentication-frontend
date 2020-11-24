import { TokenService } from './token.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { ALL_USERS_URL, CURRENT_USER_DATA_URL, HTTP_OPTIONS, USER_BY_ID } from './url.constant';
import { Observable } from 'rxjs';
import { User } from '../models/user/user.model';
import { Role } from '../models/role/role.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  currentUser: any;

  constructor(private http: HttpClient, private tokenService: TokenService) {
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

  getCurrentUserRoles(): Array<any> {
    const roles = Array<any>();
    this.getCurrentProfile().subscribe(data => {
      data.roles.forEach(role => roles.push(role));
    });
    return roles;
  }

  isAdmin(): any {
    const roles = this.tokenService.getRoles();
    for (let i = 0; i < roles.length; i++) {
      const role = roles[i];
      if(role === 'ROLE_ADMIN') {
        return true;
      }
    }
    return false;
  }
}
