import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';

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
import { MatInputModule} from '@angular/material/input';
import { MatSelectModule} from '@angular/material/select';
import { MatCardModule} from '@angular/material/card';
import { MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTabsModule} from '@angular/material/tabs';
import {MatExpansionModule} from '@angular/material/expansion';
import { InvoiceTemplateComponent } from './invoice-template/invoice-template.component';
import { ServiceComponent } from './service/service.component';
import { FormComponent } from './form/form.component';
import { FormsModule,  ReactiveFormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';
import { UserDataModalComponent } from './user-data-modal/user-data-modal.component';
import { PaymentConfirmationPopupComponent } from './payment-confirmation-popup/payment-confirmation-popup.component';
import { GoaDetailComponent } from './package-detail/goa-detail/goa-detail.component';
import { environment } from 'src/environments/environment';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

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
    InvoiceTemplateComponent,
    ServiceComponent,
    FormComponent,
    UserDataModalComponent,
    PaymentConfirmationPopupComponent,
    GoaDetailComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatTooltipModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule,
    MatSnackBarModule,
    MatTabsModule,
    MatExpansionModule,
    FormsModule,
    ReactiveFormsModule,
    MatSliderModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
  ],
  providers: [],
  bootstrap: [AppComponent,]
})
export class AppModule { }
