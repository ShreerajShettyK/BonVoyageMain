import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './auth-guard.service';

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
import { InvoiceTemplateComponent } from './invoice-template/invoice-template.component';
import { UserDataModalComponent } from './user-data-modal/user-data-modal.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: '', component: HomeComponent ,canActivate:[AuthGuardService]},
  { path: 'package/:id', component: PackageDetailComponent ,canActivate:[AuthGuardService]},
  { path: 'hotel/:id', component: HotelsHoteltabComponent ,canActivate:[AuthGuardService]},
  { path: 'place/:id', component: PlaceDetailComponent ,canActivate:[AuthGuardService]},
  { path: 'help/:id', component: HelpDetailComponent ,canActivate:[AuthGuardService]},
  { path: 'Premium', component: ExplorePremiumPackageComponent ,canActivate:[AuthGuardService]},
  { path: 'Deluxe', component:  ExplorePremiumPackageComponent ,canActivate:[AuthGuardService]},
  { path: 'Diamond', component: ExplorePremiumPackageComponent,canActivate:[AuthGuardService]},
  // { path: '', redirectTo: '/places', pathMatch: 'full' },
  { path: 'places', component: PlaceDetailComponent ,canActivate:[AuthGuardService]},
  { path: 'explore/:id', component: ExploreComponent ,canActivate:[AuthGuardService]},
  { path: 'hotel-stay/:id', component:  HotelstayComponent ,canActivate:[AuthGuardService]},
  { path: 'invoice', component: InvoiceTemplateComponent ,canActivate:[AuthGuardService]},
  { path: 'traveller', component:  UserDataModalComponent ,canActivate:[AuthGuardService]},
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' ,canActivate:[AuthGuardService]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
