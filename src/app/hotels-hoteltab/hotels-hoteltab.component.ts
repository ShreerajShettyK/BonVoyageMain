import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hotels-hoteltab',
  templateUrl: './hotels-hoteltab.component.html',
  styleUrls: ['./hotels-hoteltab.component.css']
})
export class HotelsHoteltabComponent {

  hotels = [
    {
      title: 'Marriott Goa Resort',
      rating: "⭐⭐⭐⭐⭐",
      description:
        "Goa",
      imgSrc:
        'https://r1imghtlak.mmtcdn.com/oiagudp3c552l5d537as4us8001s.jpg?&downsize=573:*&crop=573:240;0,90&output-format=jpg',
      hotelUrl: 'https://www.marriott.com/default.mi?nst=paid&cid=PAI_GLB00050BU_GLE000BLRA_GLF000ONOU&ppc=ppc&pId=intbppc&gclid=129db5e701c5197a90fbd3fbb2f48aff&gclsrc=3p.ds&msclkid=129db5e701c5197a90fbd3fbb2f48aff&utm_source=bing&utm_medium=cpc&utm_campaign=SE~BNG_FS~TB_MB~SPG_KC~BC_DS~NSA_MK~IN_LG~EN_SC~Core&utm_term=Marriott%20Com&utm_content=CoreBrand_Marriott_Phrase',
      disable: false,
    },
    {
      title: 'Lalit Grand Palace',
      rating: "⭐⭐⭐⭐",
      description:
        "Karnataka",
      imgSrc:
        'https://dubaihotelvacancy.com/wp-content/uploads/2021/12/The-LaLiT-Grand-Palace-Srinagar1.jpeg',
      hotelUrl: 'https://www.marriott.com/default.mi?nst=paid&cid=PAI_GLB00050BU_GLE000BLRA_GLF000ONOU&ppc=ppc&pId=intbppc&gclid=129db5e701c5197a90fbd3fbb2f48aff&gclsrc=3p.ds&msclkid=129db5e701c5197a90fbd3fbb2f48aff&utm_source=bing&utm_medium=cpc&utm_campaign=SE~BNG_FS~TB_MB~SPG_KC~BC_DS~NSA_MK~IN_LG~EN_SC~Core&utm_term=Marriott%20Com&utm_content=CoreBrand_Marriott_Phrase',
      disable: false,
    },
    {
      title: 'Grand Hyatt',
      rating: "⭐⭐⭐⭐⭐",
      description:
        "Kerala",
      imgSrc:
        'https://assets.hyatt.com/content/dam/hyatt/hyattdam/images/2018/07/02/1033/Grand-Hyatt-Kochi-Bolgatty-P058-Hotel-Facade.jpg/Grand-Hyatt-Kochi-Bolgatty-P058-Hotel-Facade.16x9.jpg?imwidth=1920',
      hotelUrl: 'https://www.hyatt.com/grand-hyatt/en-US/cokgh-grand-hyatt-kochi-bolgatty/rooms',
      disable: false,
    },
    {
      title: 'The Leela Palace',
      rating: "⭐⭐⭐⭐",
      description:
        "Kerala",
      imgSrc:
        'https://www.todaystraveller.net/wp-content/uploads/2021/02/The-Leela-Palace-Jaipur-2048x1365.jpg',
      hotelUrl: 'https://www.theleela.com/special-offers/blissful-escapes?utm_source=bing&utm_medium=cpc&utm_campaign=IA_Bing_Corporate_Brand_Neev_India&msclkid=2852c0006383110aa8a4a61cd5bedcf9&utm_term=leela%20palace&utm_content=Leela%20Hotels',
      disable: false,
    },
    {
      title: 'Cliff Hotels',
      rating: "⭐⭐⭐⭐⭐",
      description:
        "Kanyakumari",
      imgSrc:
        'https://www.holidify.com/images/cmsuploads/compressed/Coorg-Cliffs010_20201202221833.jpg',
      hotelUrl: 'https://cliffshotelandspa.com/?gclid=0971142ce4b01e19a03b723052d41a01&gclsrc=3p.ds&&sjrncid=BI_482739382&sjrnaid=BI_77515761349633&gclid=0971142ce4b01e19a03b723052d41a01&gclsrc=3p.ds&',
      disable: false,
    },
    {
      title: 'Hotel Oberoi',
      rating: "⭐⭐⭐⭐",
      description:
        "Coorg",
      imgSrc:
        'https://cf.bstatic.com/xdata/images/hotel/max1024x768/31211348.jpg?k=c469403df80f10e33120c7be42b61d458746716a4e04c62ad4b9afc1c22edc98&o=&hp=1',
        hotelUrl: 'https://www.oberoihotels.com/',
      disable: false,
    },
  ]

  filteredBoxes: any[] = []; // Initialize with an empty array
  filterText: string = '';

  ngOnInit() {
    this.filteredBoxes = this.hotels; // Set initial filteredBoxes to all places
  }

  filterBoxes() {
    this.filteredBoxes = this.hotels.filter((hotel) =>
      hotel.description.toLowerCase().includes(this.filterText.toLowerCase())
    );
  }

  constructor(private router: Router) { }

  showHotels(place: any) {
    this.router.navigate(['/hotel-stay', place.id]);
  }
  

}
