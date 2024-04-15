import { Component } from '@angular/core';
import { EnquiryModalService } from '../services/enquiry-modal.service';

@Component({
  selector: 'app-package-detail',
  templateUrl: './package-detail.component.html',
  styleUrls: ['./package-detail.component.css']
})

export class PackageDetailComponent {


  places = [
    {
      title: "Goa",
      description: "Explore the golden beaches, vibrant culture, and historic architecture of Goa, India's coastal paradise.",
      imgSrc: "https://i.pinimg.com/originals/88/b1/5c/88b15c085218dad18b673834563925b3.jpg"
    },
    {
      title: "Darjeeling",
      description: "Discover the scenic tea plantations, stunning Himalayan views, and charming colonial heritage of Darjeeling.",
      imgSrc: "https://wallpaperaccess.com/full/4136696.jpg"
    },
    {
      title: "Kerala",
      description: "Experience the lush greenery, tranquil backwaters, and vibrant cultural traditions of Kerala, India's God's Own Country.",
      imgSrc: "https://s1.1zoom.me/b5545/524/India_Rivers_Riverboat_Alappuzha_Kerala_Palms_527898_2560x1440.jpg"
    },
    {
      title: "Kashmir",
      description: "Experience the colourful culture of Kashmir on this vacation. Indulge in a relaxing houseboat stay",
      imgSrc: "https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/cities/4308/House-boat.jpg"
    },
    {
      title: "Coorg",
      description: "Discover the scenic tea plantations, stunning Coorg views, and charming colonial heritage of Kodagu.",
      imgSrc: "https://media.easemytrip.com/media/Deal/DL638304132130813825/SightSeeing/SightSeeing36wZKy.jpg"
    },
    {
      title: "Kanyakumari",
      description: "Head to Kanyakumari and visit the famous Vivekananda Rock Memorial.",
      imgSrc: "https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/cities/1208/Ship%20passing%20through%20Pamban%20bridge.jpg"
    }
  ]

  filteredBoxes: any[] = []; // Initialize with an empty array
  filterText: string = '';

  ngOnInit() {
    this.filteredBoxes = this.places; // Set initial filteredBoxes to all places
  }

  filterBoxes() {
    this.filteredBoxes = this.places.filter(place =>
      place.title.toLowerCase().includes(this.filterText.toLowerCase())
    );
  }


  // constructor(public enquiryModalService: EnquiryModalService) { }


  // sendEnquiry(packageName: string) {
  //   console.log('Enquiry sent for package:', packageName);
  //   this.enquiryModalService.openGallery();
  // }

}
