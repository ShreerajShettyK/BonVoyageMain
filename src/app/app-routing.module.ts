// app-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { PackageDetailComponent } from './package-detail/package-detail.component';
// import { HotelDetailComponent } from './hotel-detail/hotel-detail.component';
import { PlaceDetailComponent } from './place-detail/place-detail.component';
import { HelpDetailComponent } from './help-detail/help-detail.component';
import { ExplorePremiumPackageComponent } from './explore-premium-package/explore-premium-package.component';
import { ExploreDeluxePackageComponent } from './explore-deluxe-package/explore-deluxe-package.component';
import { ExploreDiamondPackageComponent } from './explore-diamond-package/explore-diamond-package.component';
import { ExploreComponent } from './explore/explore.component';
import { HotelstayComponent } from './hotelstay/hotelstay.component';
import { HotelsHoteltabComponent } from './hotels-hoteltab/hotels-hoteltab.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'package/:id', component: PackageDetailComponent },
  { path: 'hotel/:id', component: HotelsHoteltabComponent },
  { path: 'place/:id', component: PlaceDetailComponent },
  { path: 'help/:id', component: HelpDetailComponent },
  { path: 'Premium', component: ExplorePremiumPackageComponent },
  { path: 'Deluxe', component:  ExplorePremiumPackageComponent },
  { path: 'Diamond', component: ExplorePremiumPackageComponent},
  { path: '', redirectTo: '/places', pathMatch: 'full' },
  { path: 'places', component: PlaceDetailComponent },
  { path: 'explore/:id', component: ExploreComponent },
  { path: 'hotel-stay/:id', component:  HotelstayComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
