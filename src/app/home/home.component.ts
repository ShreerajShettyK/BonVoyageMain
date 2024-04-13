import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { EnquiryModalService } from '../services/enquiry-modal.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
  
})
export class HomeComponent implements AfterViewInit {

  @ViewChild('myVideo') myVideo!: ElementRef;

  ngAfterViewInit() {
    this.setupVideoReplay();
  }
  
  constructor(public enquiryModalService: EnquiryModalService) {}
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
