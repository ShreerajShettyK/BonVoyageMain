import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { EnquiryModalService } from '../services/enquiry-modal.service';
import { ServiceComponent } from '../service/service.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  user: any;
  taskForm: FormGroup;
  showDropdown: boolean = false;

  constructor(
    public sendservice: ServiceComponent,
    public enquiryModalService: EnquiryModalService,
    private afAuth: AngularFireAuth,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        this.user = user;
      }
    });

    this.taskForm = this.fb.group({
      toplace: [1, [Validators.required]],
      travellerCount: [0, [Validators.required, this.isInvalidTravellersCount]],
      date: [new Date(), [Validators.required, this.futureDateValidator]],
    });
  }
  toggleDropdown() {
    this.showDropdown = !this.showDropdown;
  }
  sendEnquiry(packageName: string) {
    console.log('Enquiry sent for package:', packageName);
    this.enquiryModalService.openSuccessModal();
  }

  btnClick(): void {
    if (this.taskForm.valid) {
      window.location.href = "testing/" + this.taskForm.value.toplace + "/" + this.taskForm.value.date + "/" + this.taskForm.value.travellerCount;
    } else {
      // If the form is invalid, mark all fields as touched to display error messages
      this.markAllAsTouched(this.taskForm);
    }
  }

  futureDateValidator(control: any) {
    const selectedDate = new Date(control.value);
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate()); // Tomorrow's date
    if (selectedDate < currentDate) {
      return { invalidDate: true };
    }
    return null;
  }

  isInvalidTravellersCount(control: any) {
    const travellers = control.value;
    if (travellers < 1 || travellers > 15) {
      return { minTravellers: true };
    }
    return null;
  }

  // Helper function to mark all form fields as touched
  markAllAsTouched(formGroup: FormGroup): void {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();
      if (control instanceof FormGroup) {
        this.markAllAsTouched(control);
      }
    });
  }
}
