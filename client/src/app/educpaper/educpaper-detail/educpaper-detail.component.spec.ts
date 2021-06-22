import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { SharedService } from 'src/app/shared.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { EducpaperDetailComponent } from './educpaper-detail.component';
import { NgxPaginationModule } from 'ngx-pagination';
import {FormsModule} from '@angular/forms';
import { By } from '@angular/platform-browser';

describe('EducpaperDetailComponent', () => {
  let component: EducpaperDetailComponent;
  let fixture: ComponentFixture<EducpaperDetailComponent>;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EducpaperDetailComponent ],
      imports:[RouterTestingModule, HttpClientTestingModule, NgxPaginationModule,FormsModule],
      providers:[SharedService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EducpaperDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  }); 
  
  it('should click fetch questions button', fakeAsync(() => {
    let buttonElement = fixture.debugElement.query(By.css('#fetchQuestions'));
      
    spyOn(component, 'getQ');
    //Trigger click event after spyOn
    buttonElement.triggerEventHandler('click', null);
      
    tick();
    expect(component.getQ).toHaveBeenCalled();
  }));

});
function componentInstance(componentInstance: any, arg1: string) {
  throw new Error('Function not implemented.');
}

