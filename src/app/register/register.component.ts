import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  errorMessage: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]],
      displayName: ['', [Validators.required]],
      dob: ['', [Validators.required]],
      mobileNumber: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]]
    }, {
      validator: this.passwordMatchValidator
    });
  }
ngOnInit() {
  // Initialization logic, if needed
  window.onbeforeunload = (event) => {
    if (this.registerForm.dirty) {
      event.preventDefault();
      event.returnValue = 'Are you sure you want to leave? Your data may not be saved.';
    }
  };
}

  onSubmit() {
    if (this.registerForm.valid) {
      const email = this.registerForm.get('email')?.value;
      const password = this.registerForm.get('password')?.value;
      const displayName = this.registerForm.get('displayName')?.value;
      const dob = this.registerForm.get('dob')?.value;
      const mobileNumber = this.registerForm.get('mobileNumber')?.value;

      if (email && password && displayName && dob && mobileNumber) {
        this.authService.register(email, password, displayName, dob, mobileNumber)
          .then(() => {
            // Registration successful, navigate to a success page or login page
            this.router.navigate(['/login']);
          })
          .catch(error => {
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
}