import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EnquiryModalService } from '../services/enquiry-modal.service';
import { BookingDataService } from '../booking-data.service';

@Component({
  selector: 'app-explore-premium-package',
  templateUrl: './explore-premium-package.component.html',
  styleUrls: ['./explore-premium-package.component.css']
})
export class ExplorePremiumPackageComponent implements OnInit {
  cancelPanelOpenState = false;
  tandcPanelOpenState = false;
  dontShowButton: boolean = false;
  travelDate!: Date;
  packageForm!: FormGroup;
  enteredDate!: Date;
  generatedDates: string[] = [];

  readonly numberOfDays = 4;
  readonly pricePerPerson = 20000;
  numberOfTravellers: number = 1;

  constructor(
    public enquiryModalService: EnquiryModalService,
    private fb: FormBuilder,
    private bookingDataService: BookingDataService
  ) { }

  ngOnInit() {
    this.numberOfTravellers = 1;

    this.packageForm = this.fb.group({
      numberOfTravellers: [this.numberOfTravellers, [Validators.required, this.travellerCountValidator()]],
      travelDate: [null, [Validators.required, this.futureDateValidator()]]
    });

    this.packageForm.valueChanges.subscribe(value => {
      this.calculateTotalPrice();
      this.calculateNumberOfTravellers();
      this.dontShowButton = this.packageForm.get('numberOfTravellers').invalid;
    });
  }

  onTravelDateChange() {
    this.enteredDate = this.packageForm.get('travelDate')!.value;
    this.updateDates();
  }

  updateDates(): void {
    this.generatedDates = [];
    for (let i = 0; i < 4; i++) {
      const newDate = new Date(this.enteredDate);
      newDate.setDate(newDate.getDate() + i);
      this.generatedDates.push(this.formatDate(newDate));
    }
  }

  private formatDate(date: Date): string {
    const options: Intl.DateTimeFormatOptions = { weekday: 'short', month: 'short', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  }

  futureDateValidator() {
    return (control: any): { [key: string]: any } | null => {
      const selectedDate = new Date(control.value);
      const currentDate = new Date();
      const tomorrowDate = new Date();
      tomorrowDate.setDate(currentDate.getDate() + 1); // Tomorrow's date

      if (control.dirty && selectedDate < tomorrowDate) {
        return { invalidDate: true }; // Return error for past date
      }

      return null; // Return null for valid date
    };
  }



  calculateTotalPrice() {
    const numberOfTravellers = this.packageForm.get('numberOfTravellers')?.value;
    if (numberOfTravellers) {
      this.totalPrice = numberOfTravellers * this.pricePerPerson;
    } else {
      this.totalPrice = 0;
    }
  }

  totalPrice = this.pricePerPerson;;

  calculateNumberOfTravellers() {
    this.numberOfTravellers = this.packageForm.get('numberOfTravellers')?.value || 1;
  }

  sendEnquiry(packageName: string) {
    console.log('Enquiry sent for package:', packageName);
    this.enquiryModalService.openSuccessModal();
  }

  submitPackageForm() {
    if (this.packageForm.valid) {
      this.bookingDataService.setBookingData({
        numberOfDays: this.numberOfDays,
        numberOfTravellers: this.packageForm.get('numberOfTravellers')?.value,
        totalPrice: this.totalPrice,
        travelDate: this.packageForm.get('travelDate')?.value,
        personsData: [],
        finalAmount: 0,
        destination: "Goa",
      });
      console.log('Form submitted successfully:', this.packageForm.value);
      console.log('Form submitted successfully:', this.bookingDataService.getBookingData());
    } else {
      this.packageForm.markAllAsTouched();
    }
  }

  travellerCountValidator() {
    return (control: any): { [key: string]: any } | null => {
      const travellers = control.value;

      if (travellers === null || travellers === undefined) {
        return { required: true };
      }

      if (travellers < 1) {
        return { minTravellers: true };
      } else if (travellers > 15) {
        return { maxTravellers: true };
      }

      return null;
    };
  }

  isInvalidDate() {
    const selectedDate = new Date(this.packageForm.controls['travelDate'].value);
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() - 1); // Yesterday's date
    return selectedDate < currentDate;
  }
}
