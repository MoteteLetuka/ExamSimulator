import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Router} from '@angular/router';
import { SharedService } from 'src/app/shared.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-stupaper-detail',
  templateUrl: './stupaper-detail.component.html',
  styleUrls: ['./stupaper-detail.component.css']
})
export class StupaperDetailComponent implements OnInit {

  model : any = {};
  @Output() cancelAddSubject = new EventEmitter();
  id: number | undefined;
  private sub: any;
  totalRecord: number | undefined; // also used for score
  pageNumber : number = 1;


  score : number = 0;
  filter = false;
  // checkbox near answer clicked we increment score
  
 
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

  onFilterChange(eve: any) {
    this.filter = !this.filter;
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
