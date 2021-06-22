import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedService } from 'src/app/shared.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { EducpaperListComponent } from './educpaper-list.component';

describe('EducpaperListComponent', () => {
  let component: EducpaperListComponent;
  let fixture: ComponentFixture<EducpaperListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EducpaperListComponent ],
      imports:[RouterTestingModule, HttpClientTestingModule],
      providers:[SharedService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EducpaperListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
 

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
