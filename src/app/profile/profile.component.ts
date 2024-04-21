// profile.component.ts
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { BookingDataService } from '../../app/booking-data.service'; // Import BookingDataService
import { Person } from '../person.type';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  cancelPanelOpenState = false;
  userData: any;
  bookingData: {
    numberOfDays: number;
    numberOfTravellers: number;
    totalPrice: number;
    travelDate: Date;
    personsData: Person[];
    finalAmount: number;
    destination: String;
    paid:boolean;
    
  } = {
    numberOfDays: 0,
    numberOfTravellers: 0,
    totalPrice: 0,
    travelDate: new Date(),
    personsData: [],
    finalAmount: 0,
    destination: "",
    paid: false
  };
  returnDate: Date;

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
    this.bookingData = this.bookingDataService.getNewBookingData();
    this.returnDate = this.calculateReturnDate();
    console.log(this.bookingData);
  }

  // formatDate(dateString: string): string {
  //   const date = new Date(dateString);
  //   const day = date.getDate().toString().padStart(2, '0');
  //   const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Months are 0-indexed
  //   const year = date.getFullYear();
  //   return `${day}/${month}/${year}`;
  // }

  // formatDateNew(date: Date): string {
  //   const day = date.getDate().toString().padStart(2, '0');
  //   const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Months are 0-indexed
  //   const year = date.getFullYear();
  //   return `${day}/${month}/${year}`;
  // }

  calculateReturnDate(): Date {
    const travelDate = this.bookingData.travelDate; // Assuming travelDate is a Date object
    const returnDate = new Date(travelDate.getTime()); // Create a copy to avoid modifying original
    returnDate.setDate(returnDate.getDate() + 3); // Add 4 days to the copy
    return(returnDate);
  }
}
