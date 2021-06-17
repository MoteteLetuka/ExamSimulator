import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIUrl = "https://localhost:5001/api";

  constructor(private http:HttpClient) { }
  getUsers():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/users');
  }

  getSubjects():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/subject');
  }

  addSubject(val:any){
    return this.http.post(this.APIUrl+'/subject/register', val)
  }

  getQuestions():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/question');
  }
  
  addQuestion(val:any){
    return this.http.post(this.APIUrl+'/question/register', val);
  }

  getPapers():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/paper');
  }

  getPaper(val:number):Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/paper');
  }
  
  addPaper(val:any){
    return this.http.post(this.APIUrl+'/paper/register', val);
  }

  updatePaper():Observable<any>{
    return this.http.put<any>(this.APIUrl+'/paper/UpdatePaper',null);
  }

  getExams():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/exam');
  }
  
  addExam(val:any){
    return this.http.post(this.APIUrl+'/exam/register', val);
  }
 
}
