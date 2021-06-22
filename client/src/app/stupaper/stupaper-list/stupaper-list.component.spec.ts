import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedService } from 'src/app/shared.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { StupaperListComponent } from './stupaper-list.component';

describe('StupaperListComponent', () => {
  let component: StupaperListComponent;
  let fixture: ComponentFixture<StupaperListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StupaperListComponent ],
      imports:[RouterTestingModule, HttpClientTestingModule],
      providers:[SharedService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StupaperListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
