import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { CountdownComponent, CountdownConfig, CountdownEvent } from 'ngx-countdown';
import { NgForm } from '@angular/forms';
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

/*   getPaper(i:number){
    this.service.getPaper(i).subscribe (ques=>{
      this.questions = ques;
      console.log(ques);
      this.totalRecord = ques.length;
    });

  } */
  recordPerformance(){  
      //insert data into session
      //alert("Tolal:"+ this.totalRecord+ "Your score" + this.score);
      //Xmark: number = (this.score/this.totalRecord) this.score/this.totalRecord;
        var val = {
          student: 9,
          mark: this.score,
          questionPaper: this.id,
          evaluated: this.totalRecord
      }

      this.service.addExam(val).subscribe( response=>{
        console.log(JSON.stringify(response));
        alert("You have completed the paper.");
      },error=>{
        console.log(error);
      } ) 
    //  addQuestion.reset(); //form 
  
  }
  updateScore(){  
    //check if correct answer is selected
  this.score ++;
    //alert(this.score);
    alert("Answer saved");

  }
  r1(){
    alert("Answer saved");
  }
  r2(){
    alert("Answer saved");
  }
  r3(){
    alert("Answer saved");
  }

  ngOnDestroy(){
      this.sub.unsubscribe();
  }

}
