// explore.service.ts

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExploreService {
  getPlaceDetailsById(placeId: string) {
    // Replace this with actual logic to fetch place details based on placeId
    switch (placeId) {
      case '1':
        return {
          name: 'Place 1',
          imageUrl: 'assets/images/package-image-1.jpg',
          mainAttractions: 'Attraction A, Attraction B, Attraction C',
          thingsToExplore: 'Thing X, Thing Y, Thing Z',
          nearestHelpCenter: 'Nearest Help Center for Place 1'
        };
      case '2':
        return {
          name: 'Place 2',
          imageUrl: 'assets/images/package-image-1.jpg',
          mainAttractions: 'Attraction D, Attraction E, Attraction F',
          thingsToExplore: 'Thing P, Thing Q, Thing R',
          nearestHelpCenter: 'Nearest Help Center for Place 2'
        };
      case '3':
        return {
          name: 'Place 3',
          imageUrl: 'assets/images/package-image-1.jpg',
          mainAttractions: 'Attraction G, Attraction H, Attraction I',
          thingsToExplore: 'Thing U, Thing V, Thing W',
          nearestHelpCenter: 'Nearest Help Center for Place 3'
        };
      case '4':
        return {
          name: 'Place 4',
          imageUrl: 'assets/images/package-image-1.jpg',
          mainAttractions: 'Attraction J, Attraction K, Attraction L',
          thingsToExplore: 'Thing M, Thing N, Thing O',
          nearestHelpCenter: 'Nearest Help Center for Place 4'
        };
      case '5':
        return {
          name: 'Place 5',
          imageUrl: 'assets/images/package-image-1.jpg',
          mainAttractions: 'Attraction S, Attraction T, Attraction U',
          thingsToExplore: 'Thing D, Thing E, Thing F',
          nearestHelpCenter: 'Nearest Help Center for Place 5'
        };
      default:
        // Return a default object or handle unknown placeId
        return {};
    }
  }
}
