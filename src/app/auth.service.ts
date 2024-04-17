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

  loginWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    return this.afAuth.signInWithPopup(provider);
  }
}
