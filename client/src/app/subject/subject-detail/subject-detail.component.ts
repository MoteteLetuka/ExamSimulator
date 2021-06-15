import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Router} from '@angular/router';
import { SharedService } from 'src/app/shared.service';


@Component({
  selector: 'app-subject-detail',
  templateUrl: './subject-detail.component.html',
  styleUrls: ['./subject-detail.component.css']
})
export class SubjectDetailComponent implements OnInit {
  model : any = {};
 
  @Output() cancelAddSubject = new EventEmitter();
  constructor(private service:SharedService, private router:Router) { }

  ngOnInit(): void {

  }

  addSubject(addSubject :NgForm){
      var val = {
      id : this.model.subjectid,
      name : this.model.subjectname
    } 
    this.service.addSubject(val).subscribe( response=>{
       console.log(JSON.stringify(response));
       alert("Subject added successfully");
     },error=>{
       console.log(error);
     } ) 
     addSubject.reset();
  }

  cancel(){
    //this.cancelAddSubject.emit(false);
    this.model.subjectid.updateValue('');
    this.model.subjectname.updateValue('');   
 
  }
  reloadComponent() {
    let currentUrl = this.router.url;
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
        this.router.onSameUrlNavigation = 'reload';
        this.router.navigate([currentUrl]);
    }
}
