import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';


@Component({
  selector: 'app-stupaper-list',
  templateUrl: './stupaper-list.component.html',
  styleUrls: ['./stupaper-list.component.css']
})
export class StupaperListComponent implements OnInit {

  constructor(private service:SharedService) { }
  PaperList: any[] = [];
  SubjectList: any[] = []; 
  totalpapers!: number;
  totalSubjects!: number;
  questions: any[] = [];
  mergedandfiltered: any[] = [];
  totalQ!: number;
  totalMerged!: number;

  ngOnInit(): void {
    this.refreshPaperList();
    this.refreshSujectList();
    this.combine();
  }

  refreshPaperList(){
    this.service.getPapers().subscribe(data=>{
      this.PaperList = data;
      console.log(this.PaperList);
      this.totalpapers = data.length;
    });
  }
  refreshSujectList(){
    this.service.getSubjects().subscribe(data=>{
      this.SubjectList = data;
      this.totalSubjects = data.length;      
    });
  }
  getQ(){
    this.service.getQuestions().subscribe (ques=>{
      this.questions = ques;
      console.log(ques);
      this.totalQ = ques.length;
    });
  }
  combine(){
    for(var i = 0; i < this.SubjectList.length; i++){
      for(var j = 0; j < this.PaperList.length; j++){
        if( this.SubjectList[i]['Id'] == this.PaperList[j]['SubjId']){
          this.mergedandfiltered.push({"SName": this.SubjectList[i]['Name'],
          "Pid":this.PaperList[j]['Id'],
          "PName":this.PaperList[j]['Name'],
          "Duration":this.PaperList[j]['Duration'],
          "PassMark":this.PaperList[j]['PassScore']});
        }        
      }  
    }
    console.log(this.mergedandfiltered);
    this.totalMerged = this.mergedandfiltered.length;
  }
}
