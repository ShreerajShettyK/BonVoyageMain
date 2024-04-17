import { Component, Inject, ViewChild, ElementRef, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-payment-confirmation-popup',
  templateUrl: './payment-confirmation-popup.component.html',
  styleUrls: ['./payment-confirmation-popup.component.css']
})
export class PaymentConfirmationPopupComponent implements OnInit {
  @ViewChild('dialogContent') dialogContent!: ElementRef;

  totalPrice: number;
  gst: number;
  couponDiscount: number;
  finalAmount: number;

  // Payment form fields
  name: string = '';
  phone: string = '';
  paymentMethod: string = '';
  showPaymentForm: boolean = true; // Display the payment form by default

  // Flag to indicate if payment was successful
  paymentSuccess: boolean = false;
  newPersonForm: FormGroup; // Declare the form group


  ngOnInit(): void {
    // Initialize the form group with validators
    this.newPersonForm = this.fb.group({

      name: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]], // Name validator to allow only letters and spaces

      // Name validator to allow only letters and spaces
      phone: ['', [Validators.required, Validators.minLength(10), Validators.pattern('[0-9]*')]] // Phone validator to allow only numbers and restrict length to 10 digits
    });
  }

  constructor(
    public dialogRef: MatDialogRef<PaymentConfirmationPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder
  ) {
    this.totalPrice = data.totalPrice;
    this.gst = data.gst;
    this.couponDiscount = data.couponDiscount;
    this.finalAmount = data.finalAmount;
  }

  onCancel(): void {
    this.dialogRef.close(); // Close the dialog without performing any action
  }

  submitForm() {
    // Simulate payment processing (you would replace this with actual payment processing logic)
    // For demonstration purposes, assume payment is successful after 2 seconds
    setTimeout(() => {
      // Mark payment as successful
      this.paymentSuccess = true;

      // Clear form fields after payment success
      this.name = '';
      this.phone = '';
      this.paymentMethod = '';

      // Hide payment form (if needed, but not necessary here since form is not hidden initially)
      // this.showPaymentForm = false;

      // Scroll to the top of the dialog content
      this.dialogContent.nativeElement.scrollTop = 0;
    }, 2000);
  }
}
