import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingpageComponent } from './components/landingpage/landingpage.component';
import { LoginpageComponent } from './components/loginpage/loginpage.component';
import { SignuppageComponent } from './components/signuppage/signuppage.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SearchComponent } from './components/search/search.component';
import { RestaurantsearchComponent } from './components/restaurantsearch/restaurantsearch.component';
import { ViewmenuComponent } from './components/viewmenu/viewmenu.component';
import { CartComponent } from './components/cart/cart.component';
import { MyordersComponent } from './components/myorders/myorders.component';
import { EaztycoComponent } from './components/eaztyco/eaztyco.component';
import { OffersComponent } from './components/offers/offers.component';

const routes: Routes = [

  {path:'',component:LandingpageComponent},
  {path:'login',component:LoginpageComponent},
  {path:'help',component:SignuppageComponent},
  {path:'user',component:NavbarComponent,
    children:[
      {path:'search',component:SearchComponent},
      {path:'restaurantsearch',component:RestaurantsearchComponent},
      {path:'viewmenu/:id',component:ViewmenuComponent},
      {path:'cart',component:CartComponent},
      {path:'myorders',component:MyordersComponent},
      {path:'eatzy-corporate',component:EaztycoComponent},
      {path:'offers',component:OffersComponent}
    ]
    
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
