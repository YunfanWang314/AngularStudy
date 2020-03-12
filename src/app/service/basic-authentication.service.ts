import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {HelloWorldBean} from "./data/welcome-data.service";
import {map} from "rxjs/operators";
//import {API_URL} from "../app.constants";





@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {

  constructor(private http:HttpClient) { }


  executeBasicAuthentication(username,password){

    let basicauthenheadstring = 'Basic '+ window.btoa(username + ':' + password)
    let headers = new HttpHeaders({
      Authorization: basicauthenheadstring
    })
    return this.http.get<AuthenticationBean>(`http://localhost:8080/basicauth`,{headers:headers}).pipe(
      map(
        data=>{
          sessionStorage.setItem('authenticatedUser',username);
          sessionStorage.setItem('token',basicauthenheadstring);
          return data;
        }
      )
    );
  }

  getAuthenticatedUser(){
    return sessionStorage.getItem('authenticatedUser');
  }

  getAuthenticatedToken(){
    if(this.getAuthenticatedUser()){
    return sessionStorage.getItem('token');}
  }







isUserLoggedIn(){
let user = sessionStorage.getItem('authenticatedUser');
return !(user === null);
}

logout(){
sessionStorage.removeItem('authenticatedUser');
  sessionStorage.removeItem('token');
}

}

export class AuthenticationBean {
  constructor( public massage:String) {
  }

}
