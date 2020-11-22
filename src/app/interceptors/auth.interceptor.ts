import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HTTP_INTERCEPTORS
} from '@angular/common/http';
import {Observable} from 'rxjs';
import {TokenService} from "../services/token.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private tokenService: TokenService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): any {
    let authRequest = request;
    const token = this.tokenService.getToken();
    if (token != null) {
      authRequest = request.clone({headers: request.headers.set('Authorization', 'Bearer ' + token)})
    }
    return next.handle(authRequest);
  }
}

