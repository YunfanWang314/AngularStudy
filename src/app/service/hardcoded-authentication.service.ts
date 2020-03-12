import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }
authenticate(username,password){
if(username==="wang"&&password==='123'){
sessionStorage.setItem('authenticateUser',username);
return true;
}else{
return false;}

}

isUserLoggedIn(){
let user = sessionStorage.getItem('authenticateUser');
return !(user === null);
}

logout(){
sessionStorage.removeItem('authenticateUser');
}

}
