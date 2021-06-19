import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StupaperDetailComponent } from './stupaper-detail.component';

describe('StupaperDetailComponent', () => {
  let component: StupaperDetailComponent;
  let fixture: ComponentFixture<StupaperDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StupaperDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StupaperDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
