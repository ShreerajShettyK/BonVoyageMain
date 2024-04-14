import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoaDetailComponent } from './goa-detail.component';

describe('GoaDetailComponent', () => {
  let component: GoaDetailComponent;
  let fixture: ComponentFixture<GoaDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoaDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoaDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
