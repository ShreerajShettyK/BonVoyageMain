import { Component, ViewChild } from '@angular/core';
import { ServiceComponent } from "../service/service.component";
import { NgForm,FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  @ViewChild('taskForm', { static: true }) taskForm!: NgForm;
  emailControl: FormControl;

  constructor(public sendservice: ServiceComponent, private router: Router){
    this.emailControl = new FormControl('', [Validators.required, Validators.email]);
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

  btnClick(taskForm: NgForm): void {
    this.sendservice.onSubmit(taskForm);
  }

  formatLabel(value: number): string {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return `${value}`;
  }
}
