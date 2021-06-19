import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-educpaper-list',
  templateUrl: './educpaper-list.component.html',
  styleUrls: ['./educpaper-list.component.css']
})
export class EducpaperListComponent implements OnInit {

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





 




