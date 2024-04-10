import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelsHoteltabComponent } from './hotels-hoteltab.component';

describe('HotelsHoteltabComponent', () => {
  let component: HotelsHoteltabComponent;
  let fixture: ComponentFixture<HotelsHoteltabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotelsHoteltabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HotelsHoteltabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
