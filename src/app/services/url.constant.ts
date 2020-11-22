import {HttpHeaders} from "@angular/common/http";

export const HTTP_OPTIONS = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

// Api Url
export const API_URL = 'http://localhost:8081/api';

// Auth
export const LOGIN_URL = API_URL + '/auth/login';
export const REGISTER_URL = API_URL + '/auth/register';

// User
export const CURRENT_USER_DATA_URL = API_URL + '/user/profile';
