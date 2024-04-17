import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PaymentConfirmationPopupComponent } from '../payment-confirmation-popup/payment-confirmation-popup.component';
import { BookingDataService } from '../booking-data.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-data-modal',
  templateUrl: './user-data-modal.component.html',
  styleUrls: ['./user-data-modal.component.css']
})
export class UserDataModalComponent implements OnInit {
  bookingData: {
    numberOfDays: number;
    numberOfTravellers: number;
    totalPrice: number;
    travelDate: Date
  } = {
      numberOfDays: 0,
      numberOfTravellers: 0,
      totalPrice: 0,
      travelDate: new Date(),
    };
  finalAmountInclGst: number = 0;
  discountAmount: number = 0;
  gstAmount: number = 0;

  newPersonForm: FormGroup;




  // Define properties
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

  constructor(private fb: FormBuilder, public dialog: MatDialog, private bookingDataService: BookingDataService) { }
  ngOnInit(): void {
    this.bookingData = this.bookingDataService.getBookingData();
    console.log(this.bookingData);

    // Calculate discount amount (25% off)
    this.discountAmount = (this.bookingData.totalPrice * 25) / 100;

    // Calculate GST amount (5% of the original total price)
    this.gstAmount = (this.bookingData.totalPrice * 5) / 100;

    // Calculate final amount including discount and GST
    this.finalAmountInclGst = this.bookingData.totalPrice - this.discountAmount + this.gstAmount;

    this.newPersonForm = this.fb.group({
      name: ['', Validators.required],
      dob: ['', Validators.required],
      gender: ['', Validators.required]
    })
  }


  openPaymentConfirmation(): void {
    // Calculate total price and GST
    const totalPrice = this.bookingData.totalPrice;
    const gst = this.gstAmount;
    const couponDiscount = this.discountAmount;
    const finalAmount = this.finalAmountInclGst;

    // Open payment confirmation dialog
    const dialogRef = this.dialog.open(PaymentConfirmationPopupComponent, {
      data: {
        fullName: this.fullName,
        contactNumber: this.contactNumber,
        totalPrice: totalPrice,
        gst: gst,
        couponDiscount: couponDiscount,
        finalAmount: finalAmount
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  // addPerson(): void {
  //   // Add new person to the personsData array
  //   this.personsData.push({ name: this.newPerson.name, dob: this.newPerson.dob, gender: this.newPerson.gender });

  //   // Clear newPerson object for the next entry
  //   this.newPerson = { name: '', dob: null, gender: '' };
  // }

  addPerson(): void {
    if (this.newPersonForm.valid) {
      const newPerson = this.newPersonForm.value;
      this.personsData.push({ name: this.newPerson.name, dob: this.newPerson.dob, gender: this.newPerson.gender });
      // Add the new person to your data model
    }
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
