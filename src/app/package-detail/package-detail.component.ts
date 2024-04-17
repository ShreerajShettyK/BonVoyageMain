import { Component } from '@angular/core';
import { EnquiryModalService } from '../services/enquiry-modal.service';

@Component({
  selector: 'app-package-detail',
  templateUrl: './package-detail.component.html',
  styleUrls: ['./package-detail.component.css'],
})
export class PackageDetailComponent {
  places = [
    {
      title: 'Goa',
      description:
        "Explore the golden beaches, vibrant culture, and historic architecture of Goa, India's coastal paradise.",
      imgSrc:
        'https://i.pinimg.com/originals/88/b1/5c/88b15c085218dad18b673834563925b3.jpg',
      imgScr1:
        'https://c0.wallpaperflare.com/preview/111/400/62/india-nature-goa-beach.jpg',
      imgScr2:
        'https://c1.wallpaperflare.com/preview/440/403/594/architecture-travel-sky-church-tourism-building.jpg',
      imgScr3:
        'https://c0.wallpaperflare.com/preview/689/875/798/india-goa-summer.jpg',
      path: '/Premium',
      disable: false,
    },
    {
      title: 'Darjeeling',
      description:
        'Discover the scenic tea plantations, stunning Himalayan views, and charming colonial heritage of Darjeeling.',
      imgSrc: 'https://wallpaperaccess.com/full/4136696.jpg',
      imgScr1: 'https://wallpaperaccess.com/full/1386071.jpg',
      imgScr2: 'https://wallpaperaccess.com/full/4136686.jpg',
      imgScr3: 'https://wallpaperaccess.com/full/4136688.jpg',
      path: '/Diamond',
      disable: false,
    },
    {
      title: 'Kerala',
      description:
        "Experience the lush greenery, tranquil backwaters, and vibrant cultural traditions of Kerala, India's God's Own Country.",
      imgSrc:
        'https://s1.1zoom.me/b5545/524/India_Rivers_Riverboat_Alappuzha_Kerala_Palms_527898_2560x1440.jpg',
      imgScr1: 'https://wallpaperaccess.com/full/1635200.jpg',
      imgScr2: 'https://wallpaperaccess.com/full/1635214.jpg',
      imgScr3: 'https://wallpaperaccess.com/full/1635217.jpg',
      disable: true,
    },
    {
      title: 'Kashmir',
      description:
        'Experience the colourful culture of Kashmir on this vacation. Indulge in a relaxing houseboat stay',
      imgSrc:
        'https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/cities/4308/House-boat.jpg',
      imgScr1: 'https://wallpaperaccess.com/full/1547022.jpg',
      imgScr2: 'https://wallpaperaccess.com/full/1547033.jpg',
      imgScr3: 'https://wallpaperaccess.com/full/1547047.jpg',
      disable: true,
    },
    {
      title: 'Coorg',
      description:
        'Discover the scenic tea plantations, stunning Coorg views, and charming colonial heritage of Kodagu.',
      imgSrc:
        'https://media.easemytrip.com/media/Deal/DL638304132130813825/SightSeeing/SightSeeing36wZKy.jpg',
      imgScr1: 'https://wallpaperaccess.com/full/9421612.jpg',
      imgScr2: 'https://wallpaperaccess.com/full/9421617.jpg',
      imgScr3: 'https://wallpaperaccess.com/full/9421626.jpg',
      disable: true,
    },
    {
      title: 'Kanyakumari',
      description:
        'Head to Kanyakumari and visit the famous Vivekananda Rock Memorial.',
      imgSrc:
        'https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/cities/1208/Ship%20passing%20through%20Pamban%20bridge.jpg',
      imgScr1: 'https://wallpaperaccess.com/full/2170956.jpg',
      imgScr2: 'https://wallpaperaccess.com/full/2171069.jpg',
      imgScr3:
        'https://images.unsplash.com/photo-1621338613162-569877226e04?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      disable: true,
    },
  ];

  filteredBoxes: any[] = []; // Initialize with an empty array
  filterText: string = '';

  ngOnInit() {
    this.filteredBoxes = this.places; // Set initial filteredBoxes to all places
  }

  filterBoxes() {
    this.filteredBoxes = this.places.filter((place) =>
      place.title.toLowerCase().includes(this.filterText.toLowerCase())
    );
  }

  constructor(public enquiryModalService: EnquiryModalService) {}

  sendEnquiry(place: any) {
    console.log('Enquiry sent for package:', place);
    this.enquiryModalService.openGallery(place);
  }
}
