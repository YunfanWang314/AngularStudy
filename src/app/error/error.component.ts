import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {
   error = "there are something wrong, please connect supporting stuff";
  constructor() { }

  ngOnInit(): void {
  }

}
