import { Component, OnInit, HostListener } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
  AbstractControl,
} from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  errorMessage: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.registerForm = this.formBuilder.group(
      {
        email: ['', [Validators.required, this.emailValidator]],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(8),
            Validators.pattern(/^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/),
          ],
        ],
        confirmPassword: ['', [Validators.required]],
        displayName: [
          '',
          [
            Validators.required,
            Validators.minLength(4),
            Validators.pattern(/^[^0-9]/),
          ],
        ],
        dob: ['', [Validators.required, this.dateValidator]],
        mobileNumber: [
          '',
          [Validators.required, Validators.pattern(/^[1-9]\d{9}$/)],
        ],
      },
      { validator: this.passwordMatchValidator }
    );
  }

  ngOnInit() {
    this.registerForm.valueChanges.subscribe(() => {
      this.registerForm.markAsDirty();
    });
  }

  @HostListener('window:beforeunload', ['$event'])
  onBeforeUnload(event: BeforeUnloadEvent) {
    if (this.registerForm.dirty) {
      event.preventDefault();
      event.returnValue =
        'You have unsaved changes. Are you sure you want to leave?';
    }
  }

  onSubmit() {
    if (this.registerForm.valid) {
      const email = this.registerForm.get('email')?.value;
      const password = this.registerForm.get('password')?.value;
      const displayName = this.registerForm.get('displayName')?.value;
      const dob = this.registerForm.get('dob')?.value;
      const mobileNumber = this.registerForm.get('mobileNumber')?.value;

      if (email && password && displayName && dob && mobileNumber) {
        this.authService
          .register(email, password, displayName, dob, mobileNumber)
          .then(() => {
            // Registration successful, navigate to a success page or login page
            this.router.navigate(['/login']);
          })
          .catch((error) => {
            // Handle registration error
            this.errorMessage = error.message;
          });
      }
    }
  }

  passwordMatchValidator(formGroup: FormGroup) {
    const password = formGroup.get('password')?.value;
    const confirmPassword = formGroup.get('confirmPassword')?.value;

    if (password !== confirmPassword) {
      formGroup.get('confirmPassword')?.setErrors({ mismatch: true });
    } else {
      formGroup.get('confirmPassword')?.setErrors(null);
    }
  }

  dateValidator(control: FormControl): { [key: string]: any } | null {
    const selectedDate = new Date(control.value);
    const currentDate = new Date();

    if (selectedDate > currentDate) {
      return { futureDate: true };
    }
    return null;
  }
  emailValidator(control: AbstractControl) {
    const email = control.value;
    // Regular expression pattern for email validation
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (email && !emailPattern.test(email)) {
      return { invalidEmail: true };
    }
    return null;
  }
}
