import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import {NgxPaginationModule} from 'ngx-pagination';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { AnswerDetailComponent } from './answer/answer-detail/answer-detail.component';
import { AnswerListComponent } from './answer/answer-list/answer-list.component'; 
import { ExamDetailComponent } from './exam/exam-detail/exam-detail.component';
import { ExamListComponent } from './exam/exam-list/exam-list.component'; 
import { SubjectListComponent } from './subject/subject-list/subject-list.component';
import { SubjectDetailComponent } from './subject/subject-detail/subject-detail.component';
import { QuestionListComponent } from './question/question-list/question-list.component';
import { QuestionDetailComponent } from './question/question-detail/question-detail.component';
import { SessionListComponent } from './session/session-list/session-list.component';
import { SessionDetailComponent } from './session/session-detail/session-detail.component';
import { LandingComponent } from './landing/landing.component';
import { ToastrModule } from 'ngx-toastr';
import { SharedService} from './shared.service';
import { EducpaperListComponent } from './educpaper/educpaper-list/educpaper-list.component';
import { EducpaperDetailComponent } from './educpaper/educpaper-detail/educpaper-detail.component';
import { StupaperListComponent } from './stupaper/stupaper-list/stupaper-list.component';
import { StupaperDetailComponent } from './stupaper/stupaper-detail/stupaper-detail.component';
import { CountdownModule } from 'ngx-countdown';
  

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,  
    HomeComponent, 
    RegisterComponent,
    ExamDetailComponent, 
    SubjectListComponent, 
    SubjectDetailComponent,
    QuestionListComponent, 
    QuestionDetailComponent, 
    AnswerListComponent,
    SessionListComponent,
    ExamListComponent, 
    AnswerListComponent,
    AnswerDetailComponent,
    SessionDetailComponent,
    SessionListComponent,
    LandingComponent,
    EducpaperListComponent,
    EducpaperDetailComponent,
    StupaperListComponent,
    StupaperDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    CountdownModule ,
    BsDropdownModule.forRoot(),
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right'
    })
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
