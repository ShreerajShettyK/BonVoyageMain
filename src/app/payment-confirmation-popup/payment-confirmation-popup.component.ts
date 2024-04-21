import { Component, Inject, ViewChild, ElementRef, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BookingDataService } from '../../app/booking-data.service'; // Import BookingDataService

declare var Razorpay : any;

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
  personsData: any[] = [];

  razorPayKey: any;
  // Payment form fields
  name: string = '';
  phone: string = '';
  paymentMethod: string = '';
  showPaymentForm: boolean = true; // Display the payment form by default

  // Flag to indicate if payment was successful
  paymentSuccess: boolean = false;
  newPersonForm: FormGroup; // Declare the form group
  destination: String = '';


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
    private fb: FormBuilder,
    private router: Router,
    private bookingDataService: BookingDataService,
  ) {
    this.totalPrice = data.totalPrice;
    this.gst = data.gst;
    this.couponDiscount = data.couponDiscount;
    this.finalAmount = data.finalAmount;
    this.personsData = data.personsData;
    this.destination = data.destination;
  }

  onCancel(): void {
    this.dialogRef.close(); // Close the dialog without performing any action
  }

  payNow() {
    // Replace 'YOUR_RAZORPAY_KEY' with your actual Razorpay key
    const razorPayKey = 'rzp_test_zb9ghgx1yx2Jma';

    const options: any = {
      key: razorPayKey,
      amount: Math.floor(this.finalAmount*100), // Default amount in paise (e.g., Rs. 100)
      currency: 'INR',
      name: 'BonVoyage', // company name or product name
      description: this.destination + " Package", // product description
      image: './../../assets/images/bon.jpg', // company logo or product image
      modal: {
        // We should prevent closing of the form when esc key is pressed.
        escape: false,
      },
      notes: {
        // include notes if any
      },
    };
    options.handler = (response: any, error: any) => {
      options.response = response;
      if (error) {
        this.router.navigateByUrl('/paymentfailed');
      } else {
        // Handle successful payment
        console.log(response);
        
        //code goes here
        const existingData = this.bookingDataService.getNewBookingData();

        // Update only the desired fields
        const newData = {
          ...existingData,
          paid: true
        };

        this.bookingDataService.setNewBookingData(newData);
        console.log(this.bookingDataService.getNewBookingData()); // Confirm the data is updated
        // this.router.navigateByUrl('paymentsuccess');
        
      }
    };
    options.modal.ondismiss = () => {
      // handle the case when user closes the form while transaction is in progress
      alert('Transaction has been cancelled.');
      this.router.navigateByUrl('');
    };
    const rzp = new Razorpay(options);
    rzp.open();
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
