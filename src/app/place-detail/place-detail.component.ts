import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.component.html',
  styleUrls: ['./place-detail.component.css']
})
export class PlaceDetailComponent {
  places = [
    { name: 'Srinagar', imageUrl: 'assets/images/places-image-1.jpg' ,id :1 },
    { name: 'Pahalgam', imageUrl: 'assets/images/places-image-1.jpg' ,id :2 },
    { name: 'Yousmarg', imageUrl: 'assets/images/places-image-1.jpg' ,id :3 },
    { name: 'Gulmarg', imageUrl: 'assets/images/places-image-1.jpg'  ,id :4},
    { name: 'Sonmarg', imageUrl: 'assets/images/places-image-1.jpg'  ,id :5 },
  ];

  constructor(private router: Router) { }

  explorePlace(place: any) {
    this.router.navigate(['/explore', place.id]);
  }

  showHotels(place: any) {
    this.router.navigate(['/hotel-stay', place.id]);
  }
  
}