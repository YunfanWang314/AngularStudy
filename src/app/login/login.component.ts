import { Component, OnInit } from '@angular/core';
import { HardcodedAuthenticationService } from './../service/hardcoded-authentication.service';
import { Router } from '@angular/router';
import {BasicAuthenticationService} from "../service/basic-authentication.service";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
username = 'wang';
password = '123';
invalid = 'fucking stupid you are wrong';
errormessage = false;
    constructor(private router: Router,
    private hardcodeauthentication: HardcodedAuthenticationService, private basicAuthenticationService: BasicAuthenticationService) { }

    ngOnInit(): void {
    }
  handlelogin(){
  console.log(this.username);
  if(this.hardcodeauthentication.authenticate(this.username,this.password)){
  this.errormessage = false;
  this.router.navigate(['welcome',this.username]);
  }else{
  this.errormessage = true;
  }

  }


  handleBasicAthenticationlogin(){
    //console.log(this.username);
    this.basicAuthenticationService.executeBasicAuthentication(this.username,this.password)
      .subscribe(

        data =>{
        console.log(data);
        this.router.navigate(['welcome/',this.username]);
          //this.router.navigate(['welcome',this.username]);
       // console.log("wocao");
        this.errormessage = false;
      },
      error => {
        console.log(error);
        this.errormessage =true;
      }
    )




  }
  }
