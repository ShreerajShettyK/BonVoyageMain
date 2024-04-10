import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnquirySuccessModalComponent } from './enquiry-success-modal.component';

describe('EnquirySuccessModalComponent', () => {
  let component: EnquirySuccessModalComponent;
  let fixture: ComponentFixture<EnquirySuccessModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnquirySuccessModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnquirySuccessModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
