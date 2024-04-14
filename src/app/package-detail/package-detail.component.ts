import { Component } from '@angular/core';
import { EnquiryModalService } from '../services/enquiry-modal.service';
interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-package-detail',
  templateUrl: './package-detail.component.html',
  styleUrls: ['./package-detail.component.css']
})

export class PackageDetailComponent {
  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];
   constructor(public enquiryModalService: EnquiryModalService) {}


 sendEnquiry(packageName: string) {
  console.log('Enquiry sent for package:', packageName);
  this.enquiryModalService.openGallery();
}
 
}
