import { SECRET_KEY } from './url.constant';
import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode';
import * as CryptoJS from 'crypto-js';

const TOKEN_KEY = 'auth';
const USER_KEY = 'user';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  signOut() {
    window.sessionStorage.clear();
  }

  public saveToken(token: string) {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string {
    return sessionStorage.getItem(TOKEN_KEY);
  }

  public saveUser(user) {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  public getUser() {
    return JSON.parse(sessionStorage.getItem(USER_KEY));
  }

  public saveRoles(roles: Array<string>) {
    window.sessionStorage.setItem('us_rl', this.encryptData(roles));
  }

  public getRoles() {
    return this.decryptData((sessionStorage.getItem('us_rl')));
  }

  getDecodedAccessToken(token: string): any {
    try {
      return jwt_decode(token);
    }
    catch (Error) {
      return null;
    }
  }

  removeToken() {
    window.sessionStorage.clear();
  }

  encryptData(data) {

    try {
      return CryptoJS.AES.encrypt(JSON.stringify(data), SECRET_KEY).toString();
    } catch (e) {
      console.log(e);
    }
  }

  decryptData(data) {

    try {
      const bytes = CryptoJS.AES.decrypt(data, SECRET_KEY);
      if (bytes.toString()) {
        return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
      }
      return data;
    } catch (e) {
      console.log(e);
    }
  }

}
