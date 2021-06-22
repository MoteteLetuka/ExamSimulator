import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AccountService } from '../_services/account.service';
import { RouterTestingModule } from '@angular/router/testing';
import { ToastrService } from 'ngx-toastr';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { NavComponent } from './nav.component';

describe('NavComponent', () => {
  let component: NavComponent;
  let fixture: ComponentFixture<NavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavComponent ],
      imports:[RouterTestingModule, HttpClientTestingModule, ToastrService],
      providers:[AccountService,ToastrService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
/* 
  it('should create', () => {
    expect(component).toBeTruthy();
  }); */
});
