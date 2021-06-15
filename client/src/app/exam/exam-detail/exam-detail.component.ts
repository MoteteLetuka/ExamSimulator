import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Router} from '@angular/router';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-exam-detail',
  templateUrl: './exam-detail.component.html',
  styleUrls: ['./exam-detail.component.css']
})
export class ExamDetailComponent implements OnInit {
  model : any = {};

  @Output() cancelAddSubject = new EventEmitter();
 
  constructor(private service:SharedService) { }
  SubjectList: any[] = [];
  subjects : any[] = [];

  ngOnInit(): void {
    this.getSubj();
  }

  getSubj(){
    this.service.getSubjects().subscribe(subjects=>{
      this.subjects = subjects;
    });

  }
  addPaper(addpaper :NgForm){
    var val = {
    Name: this.model.name, 
    Duration : this.model.duration, 
    PassScore : this.model.passscore, 
    eval : 0, 
    SubjId : this.model.subjectid
  } 
  this.service.addPaper(val).subscribe( response=>{
     console.log(JSON.stringify(response));
      alert("Exam Paper added successfully");
   },error=>{
     console.log(error);
   } )   
   addpaper.reset();
   //console.log(val)
// this.router.navigateByUrl('subject');
 }

}



 