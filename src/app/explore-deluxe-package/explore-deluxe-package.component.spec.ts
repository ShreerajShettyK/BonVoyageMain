import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreDeluxePackageComponent } from './explore-deluxe-package.component';

describe('ExploreDeluxePackageComponent', () => {
  let component: ExploreDeluxePackageComponent;
  let fixture: ComponentFixture<ExploreDeluxePackageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExploreDeluxePackageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExploreDeluxePackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
