import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-session-list',
  templateUrl: './session-list.component.html',
  styleUrls: ['./session-list.component.css']
})
export class SessionListComponent implements OnInit {
  
  constructor(private service:SharedService) { }
  public PerList: any[] = [];
  public UserList: any[] = [];
  public newData: any[] = [];


  ngOnInit(): void {
   //this.refreshPerformanceList();
   // this.refreshUsers();
   this.getData();
  
    //const array1 = this.PerList;
/*      [
      {id: 4, student: 9, mark: 2, questionPaper: 1, evaluated: 2} 
    ]; */ 
    //const array2 = this.UserList;
 /*     [
      {id: 5, userName: "edwin", role: "Exerminer", passwordHash: "bIQknqk1VCApEpt/0svx0u2lQnKEaoa2lRGpqRRWJra46Ma7E1m7FZns+smOzHlk4ixmHz0E+0RV10mbmM/Fxg==", passwordSalt: "eTF5fQw+iyMXnZlx24djZJM4ZOuRADS3VMltbMyeIh0t5+k/MT…rrTwtuuvlbviHLMr8yCCYP38//NMr79dKpxYpkk+FFfDJofY="},
      {id: 6, userName: "john", role: "Teacher", passwordHash: "21KGcECZknTot08MzeHPxEZOd1tIkHWKtE4spIZsm8ImSZ01I1H93NnC0okODX/6FCoXm6Wh+0bkt2IJHvC23g==", passwordSalt: "ig/ya6Pnkz6cm3SbitiUg0hj8o/ahATLxqPArWEI7/izGoxSyD…J29mcOd3o8Cu+WFgl4jv74YXQoctKVXQnGEl9w8cx+ttUoBY="},
      {id: 8, userName: "henry", role: "Educator", passwordHash: "rFBCKiFlMvkXImqGqNKCslEjVFfnryQO13V8JMaR5bcojP89R+MxbAggITridkgxNplZnHPmt1EQ0y7vU1pocA==", passwordSalt: "ojV6GiSswKnz46kESV5UIyOBfi57SxLP9R1xWf4y+tHo60sKvF…LLxdSW6H2BFvUJT10mCdyBtoCgG6nEeBTqysbGmX/n8wnQXY="},
      {id: 9, userName: "dave", role: "Student", passwordHash: "C2ty6AJy4Ro7LGB5zgARjkjNtmUdwVXHXFc4/erWFeZoCtHHGFT2aZvPfmGkTjBS2s6mgFuLIdTiSPTf1F2J8w==", passwordSalt: "9ETNbKyoyyA5Qh2f3q0Ra9tfx7fJqaAzNJyq6c2oaUoe/LLhIi…Vb1Frbb546lt2mOrNyvq2jKiX7wSFvg3GTAATEQgrBErOgo4="}

    ];  */

   /*  const newData = array1.map((item, row) => {
       const found = array2.find((element) => item.student == element.id);
       return { ...item, ...found };
    }); */
    console.log(this.PerList);
    console.log(this.UserList);  
    //console.log(newData);

  }

  refreshPerformanceList(){
    this.service.getExams().subscribe(data=>{
      this.PerList = data;
      //console.log(this.PerList);
      
    });
  }
  refreshUsers(){
    this.service.getUsers().subscribe( data=>{
      this.UserList = data;
      //console.log(this.UserList);
    });
  }
  getData(){
    this.service.getUsers().subscribe( data=>{
      this.UserList = data;
      //console.log(this.UserList);
    });

    this.service.getExams().subscribe(data=>{
      this.PerList = data;
      console.log(this.PerList);
      console.log(this.UserList);
       this.newData = this.PerList.map((item, row) => {
        const found = this.UserList.find((element) => item.student == element.id);
        return { ...item, ...found };
     }); 
     console.log(this.newData); 
    });
  }
}






  