import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelstayComponent } from './hotelstay.component';

describe('HotelstayComponent', () => {
  let component: HotelstayComponent;
  let fixture: ComponentFixture<HotelstayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotelstayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HotelstayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
