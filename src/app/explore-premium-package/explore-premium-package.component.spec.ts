import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExplorePremiumPackageComponent } from './explore-premium-package.component';

describe('ExplorePremiumPackageComponent', () => {
  let component: ExplorePremiumPackageComponent;
  let fixture: ComponentFixture<ExplorePremiumPackageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExplorePremiumPackageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExplorePremiumPackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
