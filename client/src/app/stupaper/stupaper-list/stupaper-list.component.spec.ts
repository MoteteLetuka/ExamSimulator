import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StupaperListComponent } from './stupaper-list.component';

describe('StupaperListComponent', () => {
  let component: StupaperListComponent;
  let fixture: ComponentFixture<StupaperListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StupaperListComponent ]
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
