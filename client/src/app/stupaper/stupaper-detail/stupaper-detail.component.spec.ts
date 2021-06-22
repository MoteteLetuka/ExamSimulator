import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
//import { HttpClientTestingModule } from '@angular/common/http/testing';
import { StupaperDetailComponent } from './stupaper-detail.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { SharedService } from 'src/app/shared.service';
import { By } from '@angular/platform-browser';
import { NgxPaginationModule } from 'ngx-pagination';

describe('StupaperDetailComponent', () => {
  let component: StupaperDetailComponent;
  let fixture: ComponentFixture<StupaperDetailComponent>;
  let httpclient : HttpClient;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StupaperDetailComponent ],     
      imports:[RouterTestingModule, HttpClientTestingModule,NgxPaginationModule],
      providers:[SharedService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StupaperDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should click end exam  button', fakeAsync(() => {
    let buttonElement = fixture.debugElement.query(By.css('#endExam'));
      
    spyOn(component, 'recordPerformance');
    //Trigger click event after spyOn
    buttonElement.triggerEventHandler('click', null);
      
    tick();
    expect(component.recordPerformance).toHaveBeenCalled();
  }));
   it('should create', () => {
    expect(component).toBeTruthy();
  }); 
});
