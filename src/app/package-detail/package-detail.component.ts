import { Component } from '@angular/core';
import { EnquiryModalService } from '../services/enquiry-modal.service';
@Component({
  selector: 'app-package-detail',
  templateUrl: './package-detail.component.html',
  styleUrls: ['./package-detail.component.css']
})
export class PackageDetailComponent {
   constructor(public enquiryModalService: EnquiryModalService) {}

  sendEnquiry(packageName: string) {
    console.log('Enquiry sent for package:', packageName);
    this.enquiryModalService.openSuccessModal();
 }
 
}
