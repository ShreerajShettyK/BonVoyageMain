
import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-goa-detail',
  templateUrl: './goa-detail.component.html',
  // styleUrls: ['./goa-detail.component.css']
})
export class GoaDetailComponent {
  constructor(
    public dialogRef: MatDialogRef<GoaDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
    
  ) {}

  onClose(): void {
    this.dialogRef.close();
  }
}
