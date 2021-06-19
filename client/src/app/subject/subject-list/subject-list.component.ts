import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-subject-list',
  templateUrl: './subject-list.component.html',
  styleUrls: ['./subject-list.component.css']
})
export class SubjectListComponent implements OnInit {

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
