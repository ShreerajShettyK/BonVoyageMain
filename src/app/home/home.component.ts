import { Component, ElementRef, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { EnquiryModalService } from '../services/enquiry-modal.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { NgForm,FormControl, Validators } from '@angular/forms';
import { ServiceComponent } from "../service/service.component";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
  
})
export class HomeComponent implements OnInit {

  user!:any;
  @ViewChild('taskForm', { static: true }) taskForm!: NgForm;
  emailControl: FormControl;

  constructor(public sendservice: ServiceComponent,public enquiryModalService: EnquiryModalService, private afAuth: AngularFireAuth) {}

  ngOnInit() {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.user = user;
        console.log(user);
      }
    });
  }

  sendEnquiry(packageName: string) {
    console.log('Enquiry sent for package:', packageName);
    this.enquiryModalService.openSuccessModal();
 }

  btnClick(taskForm: NgForm): void {
    this.sendservice.onSubmit(taskForm);
  }

  validateDate(event: any) {
    const selectedDate = new Date(event.target.value);
    const currentDate = new Date();

    if (selectedDate < currentDate) {
      this.taskForm.controls['date'].setErrors({ invalidDate: true });
    } else {
      this.taskForm.controls['date'].setErrors(null);
    }
  }
  
}
