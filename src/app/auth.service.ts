import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import firebase from 'firebase/compat/app';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user$: Observable<any>;

  constructor(
    private afAuth: AngularFireAuth,
    private firestore: AngularFirestore
  ) {
    this.user$ = this.afAuth.authState.pipe(map((user) => user));
  }

  async register(
    email: string,
    password: string,
    displayName: string,
    dob: Date,
    mobileNumber: string
  ) {
    const userCredential = await this.afAuth.createUserWithEmailAndPassword(
      email,
      password
    );

    const user = userCredential.user;
    const additionalData = {
      displayName: displayName,
      phoneNumber: mobileNumber,
      dob: dob,
    };
    return this.firestore
      .collection('users')
      .doc(user.uid)
      .set(additionalData, { merge: true });
  }

  login(email: string, password: string) {
    return this.afAuth.signInWithEmailAndPassword(email, password);
  }

  logout() {
    return this.afAuth.signOut();
  }
  async loginWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    try {
      const userCredential = await this.afAuth.signInWithPopup(provider);
      const user = userCredential.user;

      // Check if the user document exists in the "users" collection
      const userDoc = await this.firestore
        .collection('users')
        .doc(user.uid)
        .get()
        .toPromise();

      if (!userDoc.exists) {
        // If the user document doesn't exist, create a new entry in the "users" collection
        const additionalData = {
          displayName: user.displayName,
          phoneNumber: user.phoneNumber || '',
          dob: null, // Set a default value or prompt the user for their date of birth
        };

        await this.firestore
          .collection('users')
          .doc(user.uid)
          .set(additionalData, { merge: true });
      }

      return userCredential;
    } catch (error) {
      throw error;
    }
  }
  
  async addBooking(userBooking: any) {
    const user = await this.afAuth.currentUser;
    if (user) {
      const bookingRef = this.firestore
        .collection('users')
        .doc(user.uid)
        .collection('bookings')
        .doc();

      return bookingRef.set(userBooking);
    } else {
      throw new Error('User not authenticated');
    }
  }
}
