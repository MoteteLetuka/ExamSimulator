import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
//import { User } from './_models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Exam Simulator';
  users: any;
  constructor ( private http:HttpClient/*, private accountService AccountService*/){}

  ngOnInit() {
   // this.getUsers();
    //this.setCurrentUser();
  }

  setCurrentUser(){
    //const user : User = JSON.parse(localStorage.getItem(user));
    //this.accountService.setCurrentUser(user);
  }

}
