import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EnquiryModalService } from '../services/enquiry-modal.service';

@Component({
  selector: 'app-explore-premium-package',
  templateUrl: './explore-premium-package.component.html',
  styleUrls: ['./explore-premium-package.component.css']
})
export class ExplorePremiumPackageComponent implements OnInit {
  cancelPanelOpenState = false;
  tandcPanelOpenState = false;
  numberOfPersons!: number;
  travelDate!: Date;
  packageForm!: FormGroup;
  enteredDate!: Date;
  generatedDates: string[] = [];

  // Define premiumPackage object
  premiumPackage = {
    numberOfDays: 7,
    numberOfPersons: 2,
    price: 1500
  };

  constructor(
    public enquiryModalService: EnquiryModalService,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.packageForm = this.fb.group({
      numberOfPersons: [null, Validators.required],
      travelDate: [null, [Validators.required, this.futureDateValidator()]]
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

  sendEnquiry(packageName: string) {
    console.log('Enquiry sent for package:', packageName);
    this.enquiryModalService.openSuccessModal();
  }
  
  // Method for form submission
  submitPackageForm() {
    if (this.packageForm.valid) {
      // Handle form submission logic here
      // For example, you can access the form data using this.packageForm.value
      console.log('Form submitted successfully:', this.packageForm.value);
    } else {
      // If the form is invalid, mark all fields as touched to display error messages
      this.packageForm.markAllAsTouched();
    }
  }
}
