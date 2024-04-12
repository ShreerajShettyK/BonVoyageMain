import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { PackageDetailComponent } from './package-detail/package-detail.component';
import { PlaceDetailComponent } from './place-detail/place-detail.component';
import { HelpDetailComponent } from './help-detail/help-detail.component';
import { ExplorePremiumPackageComponent } from './explore-premium-package/explore-premium-package.component';
import { ExploreDeluxePackageComponent } from './explore-deluxe-package/explore-deluxe-package.component';
import { ExploreDiamondPackageComponent } from './explore-diamond-package/explore-diamond-package.component';
import { ExploreComponent } from './explore/explore.component';
import { HotelstayComponent } from './hotelstay/hotelstay.component';
import { UserDataModalComponent } from './user-data-modal/user-data-modal.component'; // Import the UserDataCaptureComponent

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'package/:id', component: PackageDetailComponent },
  { path: 'place/:id', component: PlaceDetailComponent },
  { path: 'help/:id', component: HelpDetailComponent },
  { path: 'Premium', component: ExplorePremiumPackageComponent },
  { path: 'Deluxe', component: ExploreDeluxePackageComponent },
  { path: 'Diamond', component: ExploreDiamondPackageComponent },
  { path: 'explore/:id', component: ExploreComponent },
  { path: 'hotel-stay/:id', component: HotelstayComponent },
  { path: 'user-data', component:  UserDataModalComponent }, // Add route for UserDataCaptureComponent
  { path: '**', redirectTo: '', pathMatch: 'full' } // Redirect to home for any unknown routes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
