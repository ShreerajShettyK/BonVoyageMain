import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PaymentConfirmationPopupComponent } from '../payment-confirmation-popup/payment-confirmation-popup.component';
import { BookingDataService } from '../booking-data.service';
import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl,
} from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-user-data-modal',
  templateUrl: './user-data-modal.component.html',
  styleUrls: ['./user-data-modal.component.css'],
})
export class UserDataModalComponent implements OnInit {
  bookingData: {
    numberOfDays: number;
    numberOfTravellers: number;
    totalPrice: number;
    travelDate: Date;
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
  personsData: any[] = [];
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

  constructor(
    private fb: FormBuilder,
    public dialog: MatDialog,
    private bookingDataService: BookingDataService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.bookingData = this.bookingDataService.getBookingData();
    console.log(this.bookingData);

    // Calculate discount amount (25% off)
    this.discountAmount = (this.bookingData.totalPrice * 25) / 100;

    // Calculate GST amount (5% of the original total price)
    this.gstAmount = (this.bookingData.totalPrice * 5) / 100;

    // Initialize the form group with validators for all form controls
    this.newPersonForm = this.fb.group({
      name: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]], // Only letters and spaces allowed
      dob: ['', [Validators.required, this.notAfterToday]], // Date not after today
      gender: ['', Validators.required],
    });

    // Calculate final amount including discount and GST
    this.finalAmountInclGst =
      this.bookingData.totalPrice - this.discountAmount + this.gstAmount;
  }

  // Custom validator to check if the date is not after today
  notAfterToday(control: AbstractControl): { [key: string]: boolean } | null {
    const selectedDate = new Date(control.value);
    const today = new Date();

    if (selectedDate > today) {
      return { invalidDate: true }; // Return an error if the date is after today
    }

    return null; // Return null if the date is valid
  }

  openPaymentConfirmation(): void {
    // Calculate total price and GST
    const totalPrice = this.bookingData.totalPrice;
    const gst = this.gstAmount;
    const couponDiscount = this.discountAmount;
    const finalAmount = this.finalAmountInclGst;
    const userBooking = this.bookingDataService.getNewBookingData();

    this.authService
      .addBooking(userBooking)
      .then(() => {
        console.log('Booking added successfully');
        // Clear the booking data or perform any necessary actions
        // this.bookingDataService.clearBookingData();
      })
      .catch((error) => {
        console.error('Error adding booking:', error);
      });

    // Open payment confirmation dialog
    const dialogRef = this.dialog.open(PaymentConfirmationPopupComponent, {
      data: {
        fullName: this.fullName,
        contactNumber: this.contactNumber,
        totalPrice: totalPrice,
        gst: gst,
        couponDiscount: couponDiscount,
        finalAmount: finalAmount,
        personsData: this.personsData
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }

  addPerson(): void {
    if (this.newPersonForm.valid) {
      const newPerson = this.newPersonForm.value;
      this.personsData.push({
        name: newPerson.name,
        dob: newPerson.dob,
        gender: newPerson.gender,
      });
      this.newPersonForm.reset();
    }
    console.log(this.personsData);
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
    const userData = this.personsData.filter(
      (person) => person.name && person.dob && person.gender
    );

    if (userData.length > 0) {
      if (
        this.personsData.every(
          (person) => person.name && person.dob && person.gender
        )
      ) {
        this.showContactForm = true;
        this.submitted = true;
        this.userDataSubmitted.emit();
        this.openPaymentConfirmation();
      }
    } else {
      console.error(
        'Please fill in all required fields for at least one person.'
      );
    }
  }
}
