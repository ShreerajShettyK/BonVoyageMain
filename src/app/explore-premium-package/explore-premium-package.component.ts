import { Component, Input } from '@angular/core';
import { EnquiryModalService } from '../services/enquiry-modal.service';

@Component({
  selector: 'app-explore-premium-package',
  templateUrl: './explore-premium-package.component.html',
  styleUrls: ['./explore-premium-package.component.css']
})
export class ExplorePremiumPackageComponent {
  //policies dropdown
  cancelPanelOpenState = false;
  tandcPanelOpenState = false;

  constructor(public enquiryModalService: EnquiryModalService) {}
  sendEnquiry(packageName: string) {
    console.log('Enquiry sent for package:', packageName);
    this.enquiryModalService.openSuccessModal();
 }
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
    {
      id: 1,
      name: 'City A',
      image: 'assets/images/places-image-1.jpg',
      numberOfDays: 5,
      price: 1000
    },
    {
      id: 1,
      name: 'City A',
      image: 'assets/images/places-image-1.jpg',
      numberOfDays: 5,
      price: 1000
    },
    {
      id: 1,
      name: 'City A',
      image: 'assets/images/places-image-1.jpg',
      numberOfDays: 5,
      price: 1000
    },

    
    // Add more places if needed
  ];
}
