import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Router} from '@angular/router';
import { SharedService } from 'src/app/shared.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-educpaper-detail',
  templateUrl: './educpaper-detail.component.html',
  styleUrls: ['./educpaper-detail.component.css']
})
export class EducpaperDetailComponent implements OnInit {

  model : any = {};
  @Output() cancelAddSubject = new EventEmitter();
  id: number | undefined;
  private sub: any;
  totalRecord: number | undefined;
  pageNumber : number = 1;
  
 
  constructor(private service:SharedService , private route: ActivatedRoute) { }
  Ques: any[] = [];
  questions : any[] = [];

  ngOnInit(): void {
    this.sub = this.route.params.subscribe( params => {
      this.id = +params['id'];// + converts string id to number
    })
  }
// need to pass by id from param, so need a filter of id
  getQ(){
    this.service.getQuestions().subscribe (ques=>{
      this.questions = ques;
      console.log(ques);
      this.totalRecord = ques.length;
    });

  }
  getPaper(i:number){
    this.service.getPaper(i).subscribe (ques=>{
      this.questions = ques;
      console.log(ques);
      this.totalRecord = ques.length;
    });

  }
  updatePaper(){  
  this.service.updatePaper().subscribe( response=>{
    alert("Exam Paper evaluated successfully");
     console.log(response);
  },error=>{
     console.log(error);
   } )   

 }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }

}
