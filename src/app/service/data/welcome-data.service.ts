import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

export class HelloWorldBean{
  constructor(public message:string) {
  }
}


@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(
    private http:HttpClient
  ) { }
  // executeBean(){
  //  // console.log( this.http.get('http://localhost:8080/1-bean'));
  // //console.log("Execute Hello World Bean");
  //   return this.http.get<HelloWorldBean>('http://localhost:8080/1-bean');
  // }

  welcomewithpath(name){
    // let basicAuthenHeadString = this.createbasicAuthenticationHttpHeader();
    // let headers = new HttpHeaders({
    //   Authorization:basicAuthenHeadString
    // })
    return this.http.get<HelloWorldBean>(`http://localhost:8080/1-bean/${name}`)//{headers:headers};
  }


  // createbasicAuthenticationHttpHeader(){
  //   let username = "user"
  //   let password = "password"
  //   let basicauthenheadstring = 'Basic '+ window.btoa(username + ':' + password)
  //   return basicauthenheadstring;
  // }

}
