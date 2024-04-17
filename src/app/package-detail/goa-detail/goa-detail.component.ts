
import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import lgFullScreen from 'lightgallery/plugins/fullscreen'
import lgZoom from 'lightgallery/plugins/zoom'
import { BeforeSlideDetail } from 'lightgallery/lg-events';

@Component({
  selector: 'app-goa-detail',
  templateUrl: './goa-detail.component.html',
  styleUrls: ['./goa-detail.component.css']
})
export class GoaDetailComponent {

  place: any;

  constructor(
    public dialogRef: MatDialogRef<GoaDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
    
  ) {
    this.place = this.data.place;
  }
  settings = {
    plugins:[lgZoom,lgFullScreen]
  }
  onClose(): void {
    this.dialogRef.close();
  }
  onBeforeSlide = (detail: BeforeSlideDetail): void => {
    const { index, prevIndex } = detail;
    console.log(index, prevIndex);
  };
}
