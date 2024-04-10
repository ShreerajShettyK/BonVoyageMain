import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HotelService } from '../services/hotel.service';

@Component({
  selector: 'app-hotelstay',
  templateUrl: './hotelstay.component.html',
  styleUrls: ['./hotelstay.component.css']
})
export class HotelstayComponent implements OnInit {
  placeId: string = '';
  hotels: any[] = [];

  constructor(private route: ActivatedRoute, private hotelService: HotelService) { }

  ngOnInit(): void {
    this.placeId = this.route.snapshot.params['id'] || '';
    this.fetchHotels();
  }

  fetchHotels(): void {
    // Use the HotelService to fetch hotels based on the placeId
    this.hotels = this.hotelService.getHotelsByPlaceId(this.placeId);
  }

}
