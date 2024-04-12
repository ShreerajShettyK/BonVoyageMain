import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-explore-premium-package',
  templateUrl: './explore-premium-package.component.html',
  styleUrls: ['./explore-premium-package.component.css']
})
export class ExplorePremiumPackageComponent {
  constructor(private router: Router) {}
  
  premiumPackage = {
    numberOfDays: 7,
    numberOfPersons: 2,
    price: 1500
  };
  
  places = [
    {
      id: 1,
      name: 'City A',
      image: 'assets/images/places-image-1.jpg',
      numberOfDays: 5,
      price: 1000
    },
    // Add more places if needed
  ];

  calculatePrice(numberOfPersons: number): number {
    return numberOfPersons * this.premiumPackage.price;
  }

  navigateToUserData() {
    this.router.navigate(['/user-data']); // Navigate to the UserDataCaptureComponent
  }
  
}
