import { Component, ElementRef, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { EnquiryModalService } from '../services/enquiry-modal.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
  
})
export class HomeComponent implements OnInit {
  user!:any;

  @ViewChild('myVideo') myVideo!: ElementRef;

  // ngAfterViewInit() {
  //   this.setupVideoReplay();
  // }
  
  constructor(public enquiryModalService: EnquiryModalService, private afAuth: AngularFireAuth) {}

  ngOnInit() {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.user = user;
        console.log(user);
      }
    });
  }

  sendEnquiry(packageName: string) {
    console.log('Enquiry sent for package:', packageName);
    this.enquiryModalService.openSuccessModal();
 }

  private setupVideoReplay() {
    const videoElement: HTMLVideoElement = this.myVideo.nativeElement;

    videoElement.addEventListener('ended', () => {
      videoElement.currentTime = 0;
      videoElement.play();
    });
  }
  
}
