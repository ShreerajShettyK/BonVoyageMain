import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-payment-confirmation-popup',
  templateUrl: './payment-confirmation-popup.component.html',
  styleUrls: ['./payment-confirmation-popup.component.css']
})
export class PaymentConfirmationPopupComponent {
  totalPrice: number;
  gst: number;

  constructor(
    public dialogRef: MatDialogRef<PaymentConfirmationPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { 
    this.totalPrice = data.totalPrice;
    this.gst = data.gst;
  }

  getTotalPayment(): number {
    return this.totalPrice + this.gst;
  }

  onOK(): void {
    this.dialogRef.close();
  }

  onCancel(): void {
    this.dialogRef.close(); // Close the dialog without performing any action
  }
}
