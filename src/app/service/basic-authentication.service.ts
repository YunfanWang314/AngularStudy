import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {HelloWorldBean} from "./data/welcome-data.service";
import {map} from "rxjs/operators";
import {StringKey} from "../utils/stringKey";

//import {API_URL} from "../app.constants";


@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {

  constructor(private http: HttpClient) {
  }


  executeBasicAuthentication(username, password) {

    let basicauthenheadstring = 'Basic ' + window.btoa(username + ':' + password)
    let headers = new HttpHeaders({
      Authorization: basicauthenheadstring
    })
    return this.http.get<AuthenticationBean>(`http://localhost:8080/basicauth`, {headers: headers}).pipe(
      map(
        data => {
          sessionStorage.setItem(StringKey.SESSION_KEY_AUTHENTICATED_USER, username);
          sessionStorage.setItem('token', basicauthenheadstring);
          return data;
        }
      )
    );
  }

  getAuthenticatedUser() {
    return sessionStorage.getItem(StringKey.SESSION_KEY_AUTHENTICATED_USER);
  }

  getAuthenticatedToken() {
    if (this.getAuthenticatedUser()) {
      return sessionStorage.getItem('token');
    }
  }


  isUserLoggedIn() {
    let user = sessionStorage.getItem(StringKey.SESSION_KEY_AUTHENTICATED_USER);
    return !(user === null);
  }

  logout() {
    sessionStorage.removeItem(StringKey.SESSION_KEY_AUTHENTICATED_USER);
    sessionStorage.removeItem('token');
  }

}

export class AuthenticationBean {
  constructor(public massage: String) {
  }

}
