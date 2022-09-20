import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.scss']
})
export class RequestComponent  {

  

  userName: String = "";
  response: any;

  constructor(private http: HttpClient) { }

  search() {
    this.http.get( 'https://api.github.com/users/' + this.userName)
    .subscribe((response) => {
        this.response =response;
        console.log(this.response)
    })
  }

}
