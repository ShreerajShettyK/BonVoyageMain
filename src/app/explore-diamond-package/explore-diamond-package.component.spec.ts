import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreDiamondPackageComponent } from './explore-diamond-package.component';

describe('ExploreDiamondPackageComponent', () => {
  let component: ExploreDiamondPackageComponent;
  let fixture: ComponentFixture<ExploreDiamondPackageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExploreDiamondPackageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExploreDiamondPackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
