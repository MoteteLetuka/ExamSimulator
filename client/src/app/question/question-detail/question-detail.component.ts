import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Router} from '@angular/router';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-question-detail',
  templateUrl: './question-detail.component.html',
  styleUrls: ['./question-detail.component.css']
})

export class QuestionDetailComponent implements OnInit {
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
  addQuestion(addQuestion :NgForm){
    var val = {
    //id : this.model.subjectid,
    //name : this.model.subjectname
    //Id: this.model.
    Answer: this.model.ans, 
    RanAns1: this.model.rans1, 
    RanAns2: this.model.rans2, 
    RanAns3: this.model.rans3, 
    _text: this.model.que, 
    subjId: this.model.subjectid
  } 
   this.service.addQuestion(val).subscribe( response=>{
     console.log(JSON.stringify(response));
     alert("Question added successfully");
   },error=>{
     console.log(error);
   } ) 
   addQuestion.reset(); 
   //console.log(val)
}

}
