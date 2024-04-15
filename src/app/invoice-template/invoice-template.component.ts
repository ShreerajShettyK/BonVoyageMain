import { Component, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PaymentConfirmationPopupComponent } from '../payment-confirmation-popup/payment-confirmation-popup.component';

@Component({
  selector: 'app-invoice-template',
  templateUrl: './invoice-template.component.html',
  styleUrls: ['./invoice-template.component.css']
})
export class InvoiceTemplateComponent {
  personsData: any[] = []; // Array to store user details
  showContactForm: boolean = false;
 
  confirmCheckbox: boolean = false;
  newPerson: any = { name: '', dob: null, gender: '' };
  submitted: boolean = false;
  showNewPersonForm: boolean = true;
  showPaymentConfirmation: boolean = false;
  fullName: string = '';
  contactNumber: string = '';
  couponCode: string = '';
  @Output() userDataSubmitted: EventEmitter<any> = new EventEmitter();

  constructor(public dialog: MatDialog) {}

  // Other methods...
  applyCoupon(): void {
    // Logic to apply the coupon code
    console.log('Coupon code applied:', this.couponCode);

    // Display an alert
    window.alert('Coupon code applied successfully!');
  }

  openPaymentConfirmation(): void {
    // Calculate total price and GST
    const totalPrice = this.calculateTotalPrice();
    const gst = this.calculateGST(totalPrice);

    // Open payment confirmation dialog
    const dialogRef = this.dialog.open(PaymentConfirmationPopupComponent, {
      data: {
        fullName: this.fullName,
        contactNumber: this.contactNumber,
        totalPrice: totalPrice,
        gst: gst
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  calculateTotalPrice(): number {
    // Calculate total price based on the number of persons added
    // For demonstration purposes, let's assume a fixed price per person
    const pricePerPerson = 12506; // Replace this with your actual price calculation
    return this.personsData.length * pricePerPerson;
  }

  calculateGST(totalPrice: number): number {
    // Calculate GST based on the total price
    // For demonstration purposes, let's assume a fixed GST rate
    const gstRate = 0.8; // 18% GST
    return totalPrice * gstRate;
  }
  addPerson(): void {
    // Add new person to the personsData array
    this.personsData.push({ name: this.newPerson.name, dob: this.newPerson.dob, gender: this.newPerson.gender });
    
    // Clear newPerson object for the next entry
    this.newPerson = { name: '', dob: null, gender: '' };
}


  removePerson(index: number): void {
    this.personsData.splice(index, 1);
  }

  editPerson(index: number): void {
    // Set newPerson object to the values of the person being edited
    this.newPerson = { ...this.personsData[index] };
    
    // Remove the person being edited from the personsData array
    this.personsData.splice(index, 1);
  }

  savePerson(index: number): void {
    // Disable editing mode for the specified person
    this.personsData[index].editing = false;
  }

  cancelEdit(index: number): void {
    // Disable editing mode for the specified person
    this.personsData[index].editing = false;
  }

  submitUserData(): void {
    const userData = this.personsData.filter(person => person.name && person.dob && person.gender);

    if (userData.length > 0) {
      if (this.personsData.every(person => person.name && person.dob && person.gender)) {
        this.showContactForm = true;
        this.submitted = true;
        this.userDataSubmitted.emit();
        this.openPaymentConfirmation();
      }
    } else {
      console.error('Please fill in all required fields for at least one person.');
    }
  }
}
