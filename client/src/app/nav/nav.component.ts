import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from '../_services/account.service';


@Component({
  selector: 'app-nav',
  template: `
<nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
    <div class="container">
    <a class="navbar-brand" routerLink="/" routerLinkActive = 'active' >Exam Simulator</a>

        <ul class="navbar-nav mr-auto">

              <li class="nav-item">
                  <a class="nav-link"  routerLink="/exam" routerLinkActive = 'active'>Exams</a>
              </li>
              <!--put subject, question, answer under here for exerminer-->

              <li class="nav-item">
                  <a class="nav-link"  routerLink="/session" routerLinkActive = 'active'>Performance</a>
              </li>
<!--              <li class="nav-item">
                  <a class="nav-link" *ngIf="loggedIn"  (click)="logout()" href="#" >Log out</a>
              </li>  -->            
              
<!--              <li class="nav-item">
                  <a class="nav-link">Messages</a>
              </li>  -->

        </ul>
        <div class="dropdown"  *ngIf="(accountService.currentUser$ | async) as user" dropdown>
            <a class="dropdown-toggle text-light ml-2" dropdownToggle >Welcome {{user.username | titlecase}}</a>
            <div class="dropdown-menu mt-3" *dropdownMenu>
              <a class="dropdown-item" >Edit Profile</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" (click)="logout()" >Logout</a>
            </div>
        </div>       


      <form *ngIf="!loggedIn" #loginForm="ngForm" class = "form-inline mt-2 mt-md-0" (ngSubmit)="login()"
        autocomplete="off">
 
          <span>

          <input 
          name = "username"
          [(ngModel)]="model.username"
          class="form-control me-2" 
          type="text" 
          placeholder="user name" >

          </span>

          <span>

          <input 
          name = "password"
          [(ngModel)]="model.password"
          class="form-control me-2" 
          type="password" 
          placeholder="password" >

          </span>

          <button class="btn btn-outline-success" type="submit">Log in</button>
        </form>
    </div>

</nav>
  `,
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {}
  loggedIn = false;
 

  constructor(public accountService: AccountService, private router: Router,
    private toastr: ToastrService){}

  ngOnInit(): void {
    this.getCurrentUser();
  }

  login(){
    this.accountService.login(this.model).subscribe(response => {
      this.loggedIn = true;
      this.router.navigateByUrl('/landing');
    }, error => {
      console.log(error)
      this.toastr.error(error.error);
    })
  }

  logout(){
    this.accountService.logout();
    this.loggedIn = false;
    this.router.navigateByUrl('/');
  }

  getCurrentUser(){
    this.accountService.currentUser$.subscribe( user=>{
      this.loggedIn = !!user;
    }, error => {
      console.log(error)
    });

  }

}

