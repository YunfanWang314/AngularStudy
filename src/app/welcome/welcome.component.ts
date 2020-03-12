import { WelcomeDataService } from './../service/data/welcome-data.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  name='';
  Welcomemessage:string;

  constructor(private route:ActivatedRoute,
  private service:WelcomeDataService) {

   }

  ngOnInit(): void {
this.name=this.route.snapshot.params['name'];
  }
//   getwelcomemessage(){
// //  console.log(this.service.executeBean());
//   this.service.executeBean().subscribe(
//     response => this.handlemessage(response),
//     error=> this.handlerror(error)
//   );
//   }
  getwelcomemessagepath(){
//  console.log(this.service.executeBean());
    this.service.welcomewithpath(this.name).subscribe(
      response => this.handlemessage(response),
      error=> this.handlerror(error)
    );
  }
  handlemessage(response){
this.Welcomemessage = response.message
  }
handlerror(error){
  //   console.log(error)
  // console.log(error.error)
  // console.log(error.error.message)
this.Welcomemessage = error.error.message;
}
}
