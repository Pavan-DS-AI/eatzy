import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingpageComponent } from './components/landingpage/landingpage.component';
import { LoginpageComponent } from './components/loginpage/loginpage.component';
import { SignuppageComponent } from './components/signuppage/signuppage.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SearchComponent } from './components/search/search.component';
import { RestaurantsearchComponent } from './components/restaurantsearch/restaurantsearch.component';
import { ViewmenuComponent } from './components/viewmenu/viewmenu.component';
import { CartComponent } from './components/cart/cart.component';
import { MyordersComponent } from './components/myorders/myorders.component';
import { FooterComponent } from './components/footer/footer.component';
import { OffersComponent } from './components/offers/offers.component';
import { EaztycoComponent } from './components/eaztyco/eaztyco.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LandingpageComponent,
    LoginpageComponent,
    SignuppageComponent,
    NavbarComponent,
    SearchComponent,
    RestaurantsearchComponent,
    ViewmenuComponent,
    CartComponent,
    MyordersComponent,
    FooterComponent,
    OffersComponent,
    EaztycoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
