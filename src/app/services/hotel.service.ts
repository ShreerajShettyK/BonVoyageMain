// hotel.service.ts

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HotelService {
  getHotelsByPlaceId(placeId: string) {
    // Replace this with actual logic to fetch hotel data based on placeId
    switch (placeId) {
      case '1':
        return [
          { name: 'Hotel A', imageUrl: 'assets/images/hotel-image-1.jpg', rating: 4.5, description: 'Lorem ipsum A' },
          { name: 'Hotel B', imageUrl: 'assets/images/hotel-image-1.jpg', rating: 4.2, description: 'Lorem ipsum B' },
        ];
      case '2':
        return [
          { name: 'Hotel X', imageUrl: 'assets/images/hotel-image-1.jpg', rating: 4.8, description: 'Lorem ipsum X' },
          { name: 'Hotel Y', imageUrl: 'assets/images/hotel-image-1.jpg', rating: 4.0, description: 'Lorem ipsum Y' },
        ];
      case '3':
        return [
          { name: 'Hotel P', imageUrl: 'assets/images/hotel-image-1.jpg', rating: 4.7, description: 'Lorem ipsum P' },
          { name: 'Hotel Q', imageUrl: 'assets/images/hotel-image-1.jpg', rating: 4.3, description: 'Lorem ipsum Q' },
        ];
      case '4':
        return [
          { name: 'Hotel M', imageUrl: 'assets/images/hotel-image-1.jpg', rating: 4.6, description: 'Lorem ipsum M' },
          { name: 'Hotel N', imageUrl: 'assets/images/hotel-image-1.jpg', rating: 4.1, description: 'Lorem ipsum N' },
        ];
      case '5':
        return [
          { name: 'Hotel S', imageUrl: 'assets/images/hotel-image-1.jpg', rating: 4.9, description: 'Lorem ipsum S' },
          { name: 'Hotel T', imageUrl: 'assets/images/hotel-image-1.jpg', rating: 4.4, description: 'Lorem ipsum T' },
        ];
      default:
        // Return a default array or handle unknown placeId
        return [];
    }
  }
}
