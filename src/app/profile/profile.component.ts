// profile.component.ts
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { BookingDataService } from '../../app/booking-data.service'; // Import BookingDataService

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  userData: any;

  constructor(
    private afAuth: AngularFireAuth,
    private firestore: AngularFirestore,
    private bookingDataService: BookingDataService,
  ) {}

  ngOnInit() {
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        this.firestore
          .collection('users')
          .doc(user.uid)
          .valueChanges()
          .subscribe((data: object) => {
            this.userData = {
              ...data,
              photoURL: user.photoURL,
              email: user.email,
              metadata: user.metadata,
            };
            if (!this.userData.displayName)
              this.userData.displayName = user.displayName;
          });
      }
    });
  }
}
