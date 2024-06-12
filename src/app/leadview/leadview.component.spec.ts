import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadViewComponent } from './leadview.component';

describe('LeadviewComponent', () => {
  let component: LeadViewComponent;
  let fixture: ComponentFixture<LeadViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeadViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeadViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
