import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hotels-hoteltab',
  templateUrl: './hotels-hoteltab.component.html',
  styleUrls: ['./hotels-hoteltab.component.css']
})
export class HotelsHoteltabComponent {
  places = [
    { name: 'Srinagar', imageUrl: 'assets/images/places-image-1.jpg' ,id :1 },
    { name: 'Pahalgam', imageUrl: 'assets/images/places-image-1.jpg' ,id :2 },
    { name: 'Yousmarg', imageUrl: 'assets/images/places-image-1.jpg' ,id :3 },
    { name: 'Gulmarg', imageUrl: 'assets/images/places-image-1.jpg'  ,id :4},
    { name: 'Sonmarg', imageUrl: 'assets/images/places-image-1.jpg'  ,id :5 },
  ];

  constructor(private router: Router) { }

  showHotels(place: any) {
    this.router.navigate(['/hotel-stay', place.id]);
  }
  

}
