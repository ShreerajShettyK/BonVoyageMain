import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BookingDataService {
  bookingData: {
    numberOfDays: number;
    numberOfTravellers: number;
    totalPrice: number;
    travelDate: Date;
  } = {
    numberOfDays: 0,
    numberOfTravellers: 0,
    totalPrice: 0,
    travelDate: new Date(),
  };

  constructor() {}

  setBookingData(data: {
    numberOfDays: number;
    numberOfTravellers: number;
    totalPrice: number;
    travelDate: Date;
  }) {
    this.bookingData = data;
  }

  getBookingData(): {
    numberOfDays: number;
    numberOfTravellers: number;
    totalPrice: number;
    travelDate: Date;
  } {
    return this.bookingData;
  }

  setNewBookingData(data: {
    numberOfDays: number;
    numberOfTravellers: number;
    totalPrice: number;
    travelDate: Date;
  }) {
    this.bookingData = data;
  }
  
  getNewBookingData(): {
    numberOfDays: number;
    numberOfTravellers: number;
    totalPrice: number;
    travelDate: Date;
  } {
    return this.bookingData;
  }
}
