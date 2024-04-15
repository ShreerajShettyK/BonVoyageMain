import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private router: Router, private afAuth: AngularFireAuth) {}

  async logout() {
    try {
      await this.afAuth.signOut();
      // Optionally, you can clear any additional session data or perform other cleanup tasks
      // sessionStorage.clear();
      // localStorage.clear();
      
      // Redirect the user to the login page or any other appropriate page
      this.router.navigate(['/login']);
    } catch (error) {
      console.error('Logout error:', error);
    }
  }
}