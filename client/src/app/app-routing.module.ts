import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnswerDetailComponent } from './answer/answer-detail/answer-detail.component';
import { AnswerListComponent } from './answer/answer-list/answer-list.component';
import { ExamDetailComponent } from './exam/exam-detail/exam-detail.component';
import { ExamListComponent } from './exam/exam-list/exam-list.component';
import { HomeComponent } from './home/home.component';
import { QuestionDetailComponent } from './question/question-detail/question-detail.component';
import { QuestionListComponent } from './question/question-list/question-list.component';
import { SessionDetailComponent } from './session/session-detail/session-detail.component';
import { SessionListComponent } from './session/session-list/session-list.component';
import { SubjectDetailComponent } from './subject/subject-detail/subject-detail.component';
import { SubjectListComponent } from './subject/subject-list/subject-list.component';
import { EducpaperListComponent } from './educpaper/educpaper-list/educpaper-list.component';
import { EducpaperDetailComponent } from './educpaper/educpaper-detail/educpaper-detail.component';
import { StupaperListComponent } from './stupaper/stupaper-list/stupaper-list.component';
import { StupaperDetailComponent } from './stupaper/stupaper-detail/stupaper-detail.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'exam',component:ExamListComponent},
  {path:'exam/:id',component:ExamDetailComponent},
  {path:'subject',component:SubjectListComponent},
  {path:'subject/:id',component:SubjectDetailComponent},
  {path:'question',component:QuestionListComponent},
  {path:'question/:id',component:QuestionDetailComponent},
  {path:'answer',component:AnswerListComponent},
  {path:'answer/:id',component:AnswerDetailComponent},
  {path:'session',component:SessionListComponent},
  {path:'session/:id',component:SessionDetailComponent},
  {path:'educpaper',component:EducpaperListComponent},
  {path:'educpaper/:id',component:EducpaperDetailComponent},
  {path:'stupaper',component:StupaperListComponent},
  {path:'stupaper/:id',component:StupaperDetailComponent},
  {path:'**',component:HomeComponent, pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
