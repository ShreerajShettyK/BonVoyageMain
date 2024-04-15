import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  user!:any;
  showProfileIcon: Boolean = false;
  constructor(private router: Router, private afAuth: AngularFireAuth) {}
  ngOnInit() {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.user = user;
        console.log(user);
        this.showProfileIcon = true;
      }
    });
  }

  async logout() {
    try {
      await this.afAuth.signOut();
       
      // Optionally, you can clear any additional session data or perform other cleanup tasks
      // sessionStorage.clear();
      // localStorage.clear();
      
      // Redirect the user to the login page or any other appropriate page
       await this.router.navigate(['/login']);
       this.showProfileIcon = false;
    } catch (error) {
      console.error('Logout error:', error);
    }
  }
}