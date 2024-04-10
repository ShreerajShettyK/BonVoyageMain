import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

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

  private setupVideoReplay() {
    const videoElement: HTMLVideoElement = this.myVideo.nativeElement;

    videoElement.addEventListener('ended', () => {
      videoElement.currentTime = 0;
      videoElement.play();
    });
  }
  
}
