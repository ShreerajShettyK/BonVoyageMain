// src/app/enquiry-modal/enquiry-modal.service.ts

import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EnquirySuccessModalComponent } from '../enquiry-success-modal/enquiry-success-modal.component';

@Injectable({
  providedIn: 'root',
})
export class EnquiryModalService {
  constructor(public dialog: MatDialog) {}

  openSuccessModal() {
    this.dialog.open(EnquirySuccessModalComponent, {
      width: '400px',
      disableClose: true,
      data: {}, // Pass an empty object as data
    });
  }
}
