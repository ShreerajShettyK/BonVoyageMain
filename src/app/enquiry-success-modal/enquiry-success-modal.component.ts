// src/app/enquiry-modal/enquiry-success-modal/enquiry-success-modal.component.ts

import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-enquiry-success-modal',
  templateUrl: 'enquiry-success-modal.component.html',
})
export class EnquirySuccessModalComponent {
  constructor(
    public dialogRef: MatDialogRef<EnquirySuccessModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
    
  ) {}

  onClose(): void {
    this.dialogRef.close();
  }
}
