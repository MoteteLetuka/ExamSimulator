import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducpaperListComponent } from './educpaper-list.component';

describe('EducpaperListComponent', () => {
  let component: EducpaperListComponent;
  let fixture: ComponentFixture<EducpaperListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EducpaperListComponent ]
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
