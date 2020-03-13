import {Injectable} from '@angular/core';
import {StringKey} from "../utils/stringKey";

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() {
  }

  authenticate(username, password) {
    if (username === "wang" && password === '123') {
      sessionStorage.setItem(StringKey.SESSION_KEY_AUTHENTICATED_USER, username);
      return true;
    } else {
      return false;
    }

  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem(StringKey.SESSION_KEY_AUTHENTICATED_USER);
    return !(user === null);
  }

  logout() {
    sessionStorage.removeItem(StringKey.SESSION_KEY_AUTHENTICATED_USER);
  }

}
