import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EnquiryModalService } from '../services/enquiry-modal.service';
import { BookingDataService } from '../booking-data.service';

@Component({
  selector: 'app-explore-diamond-package',
  templateUrl: './explore-diamond-package.component.html',
  styleUrls: ['./explore-diamond-package.component.css']
})
export class ExploreDiamondPackageComponent implements OnInit {
  cancelPanelOpenState = false;
  tandcPanelOpenState = false;
  dontShowButton:boolean = false;
  // numberOfPersons!: number;
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
  ) {}

  ngOnInit() {
    this.numberOfTravellers = 1;

    this.packageForm = this.fb.group({
      numberOfTravellers: [this.numberOfTravellers, [Validators.required, this.travellerCountValidator()]],
      travelDate: [null, [Validators.required, this.futureDateValidator()]]
    });

    this.packageForm.valueChanges.subscribe(value => {
      this.calculateTotalPrice();
      this.calculateNumberOfTravellers();
      this.dontShowButton = this.isInvalidTravellersCount();
    });
  }

  // Function to handle travel date change
  onTravelDateChange() {
    this.enteredDate = this.packageForm.get('travelDate')!.value;
    this.updateDates();
  }

  updateDates(): void {
    // Clear the previously generated dates
    this.generatedDates = [];

    // Generate dates starting from the entered date
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
      currentDate.setDate(currentDate.getDate() + 1); // Tomorrow's date
      if (selectedDate < currentDate) {
        return { invalidDate: true };
      }
      return null;
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
    this.numberOfTravellers = this.packageForm.get('numberOfTravellers')?.value || 1; // Handle default 0 travellers
  }


  sendEnquiry(packageName: string) {
    console.log('Enquiry sent for package:', packageName);
    this.enquiryModalService.openSuccessModal();
  }
  
  // Method for form submission
  submitPackageForm() {
    if (this.packageForm.valid) {
      this.bookingDataService.setBookingData({
        numberOfDays: this.numberOfDays,
        numberOfTravellers: this.packageForm.get('numberOfTravellers')?.value,
        totalPrice: this.totalPrice,
        travelDate: this.packageForm.get('travelDate')?.value
      });
      // Handle form submission logic here
      // For example, you can access the form data using this.packageForm.value
      console.log('Form submitted successfully:', this.packageForm.value);
    } else {
      // If the form is invalid, mark all fields as touched to display error messages
      this.packageForm.markAllAsTouched();
    }
  }

  travellerCountValidator() {
    return (control: any): { [key: string]: any } | null => {
      const travellers = control.value;

      if (travellers === null || travellers === undefined) {
        return { required: true }; // Handle missing input
      }

      if (travellers < 1) {
        return { minTravellers: true }; // Minimum travellers should be 1
      } else if (travellers > 15) {
        return { maxTravellers: true }; // Maximum travellers should be 15
      }

      return null;
    };
  }

  isInvalidTravellersCount(): boolean {
    const travellers = this.packageForm.get('numberOfTravellers')?.value;
    return (travellers < 1 || travellers > 15);
  }
}
