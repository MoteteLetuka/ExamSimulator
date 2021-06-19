import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducpaperDetailComponent } from './educpaper-detail.component';

describe('EducpaperDetailComponent', () => {
  let component: EducpaperDetailComponent;
  let fixture: ComponentFixture<EducpaperDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EducpaperDetailComponent ]
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
});
