import { Injectable } from '@angular/core';
import {HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {BasicAuthenticationService} from "../basic-authentication.service";

@Injectable({
  providedIn: 'root'
})
export class HttpInterceperBasicAuthService implements HttpInterceptor{

  constructor(
    private basicAuthenticationService:BasicAuthenticationService
  ) { }
  intercept(req: HttpRequest<any>, next: HttpHandler){

    let username = this.basicAuthenticationService.getAuthenticatedUser()

    let basicauthenheadstring = this.basicAuthenticationService.getAuthenticatedToken()

    if(username&&basicauthenheadstring){
    req = req.clone({
    setHeaders : {
      Authorization : basicauthenheadstring
    }
    })}
   return next.handle(req);
}}
