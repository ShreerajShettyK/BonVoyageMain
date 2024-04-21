import { Injectable } from '@angular/core';
import { Person } from "../app/person.type";

@Injectable({
  providedIn: 'root',
})

export class BookingDataService {
  bookingData: {
    numberOfDays: number;
    numberOfTravellers: number;
    totalPrice: number;
    travelDate: Date;
    personsData: Person[];
    finalAmount: number;
    destination: String;
    paid: boolean;
  } = {
    numberOfDays: 0,
    numberOfTravellers: 0,
    totalPrice: 0,
    travelDate: new Date(),
    personsData: [],
    finalAmount: 0,
    destination: "",
    paid: false
  };

  constructor() {}

  setBookingData(data: {
    numberOfDays: number;
    numberOfTravellers: number;
    totalPrice: number;
    travelDate: Date;
    personsData: Person[];
    finalAmount: number;
    destination: String;
    paid: boolean;
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
    personsData: Person[];
    finalAmount: number;
    destination: String;
    paid: boolean;
  }) {
    this.bookingData = data;
  }
  
  getNewBookingData(): {
    numberOfDays: number;
    numberOfTravellers: number;
    totalPrice: number;
    travelDate: Date;
    personsData: Person[];
    finalAmount: number;
    destination: String;
    paid: boolean;
  } {
    return this.bookingData;
  }
}
