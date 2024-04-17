import { Component, ViewChild, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup,Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { EnquiryModalService } from '../services/enquiry-modal.service';
import { ServiceComponent } from '../service/service.component';
// import {futureDateValidator,isInvalidTravelersCount} from "./validation"
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  user!: any;
  taskForm: FormGroup;

  constructor(
    public sendservice: ServiceComponent,
    public enquiryModalService: EnquiryModalService,
    private afAuth: AngularFireAuth,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        this.user = user;
        // console.log(user);
      }
    });

    this.taskForm = this.fb.group({
      toplace: [1,[Validators.required]],
      travellerCount: [0, [Validators.required,this.isInvalidTravellersCount]],
      date: [new Date(), [Validators.required,this.futureDateValidator]],
    });

  }
  travellerCountValidator(): any {
    throw new Error('Method not implemented.');
  }

  sendEnquiry(packageName: string) {
    console.log('Enquiry sent for package:', packageName);
    this.enquiryModalService.openSuccessModal();
  }

  btnClick(): void {
    if (this.taskForm.valid) {
      // console.log('Form submitted successfully:', this.taskForm.value);
      window.location.href="testing/"+this.taskForm.value.toplace+"/"+this.taskForm.value.date+"/"+this.taskForm.value.travellerCount
    } else {
      // If the form is invalid, mark all fields as touched to display error messages
      // this.markAllAsTouched(this.taskForm);
    }
  }
  futureDateValidator(control:any) {
      const selectedDate = new Date(control.value);
      const currentDate = new Date();
      currentDate.setDate(currentDate.getDate() + 1); // Tomorrow's date
      if (selectedDate < currentDate) {
        return { invalidDate: true };
      }
      return null;
    };

  isInvalidTravellersCount(control:any) {
    const travellers = control.value;
    if (travellers < 1 || travellers > 15) {
      return { minTravellers: true };
    }
    return null;
  }
 
}

