import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent implements OnInit {
  razorPayKey: any;
  constructor(private router: Router) {}

  payNow() {
    // Replace 'YOUR_RAZORPAY_KEY' with your actual Razorpay key
    const razorPayKey = 'rzp_test_zb9ghgx1yx2Jma';

    const options: any = {
      key: razorPayKey,
      amount: 10000, // Default amount in paise (e.g., Rs. 100)
      currency: 'INR',
      name: 'BonVoyage', // company name or product name
      description: '', // product description
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
        this.router.navigateByUrl('paymentsuccess');
      }
    };
    options.modal.ondismiss = () => {
      // handle the case when user closes the form while transaction is in progress
      alert('Transaction has been cancelled.');
      this.router.navigateByUrl('');
    };
    const rzp = new (window as any).Razorpay(options);
    rzp.open();
  }
  ngOnInit(): void {
  
  }
}
