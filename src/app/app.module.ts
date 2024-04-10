import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
// import { HotelDetailComponent } from './hotel-detail/hotel-detail.component';
import { PlaceDetailComponent } from './place-detail/place-detail.component';
import { HelpDetailComponent } from './help-detail/help-detail.component';
import { EnquirySuccessModalComponent } from './enquiry-success-modal/enquiry-success-modal.component';
import { PackageDetailComponent } from './package-detail/package-detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { matDialogAnimations } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ExplorePremiumPackageComponent } from './explore-premium-package/explore-premium-package.component';
import { ExploreDeluxePackageComponent } from './explore-deluxe-package/explore-deluxe-package.component';
import { ExploreDiamondPackageComponent } from './explore-diamond-package/explore-diamond-package.component';
import { MatIconModule } from '@angular/material/icon';
import { ExploreComponent } from './explore/explore.component';
import { HotelstayComponent } from './hotelstay/hotelstay.component';
import { HotelsHoteltabComponent } from './hotels-hoteltab/hotels-hoteltab.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    PackageDetailComponent,
    // HotelDetailComponent,
    PlaceDetailComponent,
    HelpDetailComponent,
    EnquirySuccessModalComponent,
    ExplorePremiumPackageComponent,
    ExploreDeluxePackageComponent,
    ExploreDiamondPackageComponent,
    ExploreComponent,
    HotelstayComponent,
    HotelsHoteltabComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatTooltipModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent,]
})
export class AppModule { }
