import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-exam-list',
  templateUrl: './exam-list.component.html',
  styleUrls: ['./exam-list.component.css']
})
export class ExamListComponent implements OnInit {

  constructor(private service:SharedService) { }
  PaperList: any[] = [];

  ngOnInit(): void {
    this.refreshPaperList();
  }

  refreshPaperList(){
    this.service.getPapers().subscribe(data=>{
      this.PaperList = data;
    });
  }

}


