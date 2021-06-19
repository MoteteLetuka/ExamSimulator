import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit {


  constructor(private service:SharedService) { }
  SubjectList: any[] = [];

  ngOnInit(): void {
    this.refreshSujectList();
  }

  refreshSujectList(){
    this.service.getSubjects().subscribe(data=>{
      this.SubjectList = data;
    });
  }


}