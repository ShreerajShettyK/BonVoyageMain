import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  errorMessage: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

    loginWithGoogle() {
    this.authService.loginWithGoogle()
      .then(() => {
        // Login successful, navigate to a protected page
        this.router.navigate(['/']);
      })
      .catch(error => {
        // Handle login error
        console.error('Google login error:', error);
      });
    }
  
  ngOnInit() {
    // Initialization logic, if needed
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const email = this.loginForm.get('email')?.value;
      const password = this.loginForm.get('password')?.value;

      if (email && password) {
        this.authService.login(email, password)
          .then(() => {
            // Login successful, navigate to a dashboard or home page
            this.router.navigate(['']);
          })
          .catch(error => {
            // Handle login error
            this.errorMessage = error.message;
          });
      }
    }
  }
}