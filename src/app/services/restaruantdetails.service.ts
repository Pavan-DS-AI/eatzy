import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestaruantdetailsService {

  constructor() { }

  // restaurants:[]=[]

  
  restaurants= [
      { resid: 1, resname: 'Paradise Restaurant', resimage: 'assets/paradise.avif', resrating: 4.7 },
      { resid: 2, resname: 'Biryaniwala & Co.', resimage: 'assets/biryaniwala.jpg', resrating: 4.6 },
      { resid: 3, resname: 'The Fishermans Wharf', resimage: 'assets/fishermans_wharf.webp', resrating: 4.5 },
      { resid: 4, resname: 'Olive Bistro', resimage: 'assets/olive_bistro.jpg', resrating: 4.4 },
      { resid: 5, resname: 'Trio The Westin', resimage: 'assets/trio_westin.jpg', resrating: 4.8 },
      { resid: 6, resname: 'Anand Ice Cream', resimage: 'assets/anands_ice_cream.avif', resrating: 4.6 },
      { resid: 7, resname: 'Hotel Shadab', resimage: 'assets/hotel_shadab.avif', resrating: 4.4 },
      { resid: 8, resname: 'Ohris Tansen', resimage: 'assets/ohri_tansen.avif', resrating: 4.3 },
      { resid: 9, resname: 'Chutneys', resimage: 'assets/chutneys.jpg', resrating: 4.5 },
      { resid: 10, resname: 'The Hyderabad House', resimage: 'assets/hyderabad_house.avif', resrating: 4.7 },
      { resid: 11, resname: 'Alfresco', resimage: 'assets/alfresco.jpg', resrating: 4.2 },
      { resid: 12, resname: 'Bikanervala', resimage: 'assets/bikanervala.avif', resrating: 4.3 },
      { resid: 13, resname: 'SodaBottleOpenerWala', resimage: 'assets/soda_bottle_openerwala.jpg', resrating: 4.4 },
      { resid: 14, resname: 'Kailash Parbat', resimage: 'assets/kailash_parbat.webp', resrating: 4.5 },
      { resid: 15, resname: 'The Taj Mahal Hotel', resimage: 'assets/taj_mahal_hotel.avif', resrating: 4.6 },
      { resid: 16, resname: 'Deccan Pavillion', resimage: 'assets/deccan_pavillion.jpg', resrating: 4.4 },
      { resid: 17, resname: 'Adaa', resimage: 'assets/adaa.jpeg', resrating: 4.5 },
      { resid: 18, resname: 'Mehfil', resimage: 'assets/mehfil.webp', resrating: 4.6 },
      { resid: 19, resname: 'Pista House', resimage: 'assets/pista_house.avif', resrating: 4.8 },
      { resid: 20, resname: 'Kismet', resimage: 'assets/kismet.avif', resrating: 4.4 }
    ]

    getallresto(){
      return of(this.restaurants)
    }

    getrestbyid(ids: any[]) {
      return of(this.restaurants.filter((e) => ids.includes(e.resid))); 
    }

    index:any
    getrestnamebysingleid(id:any){
      this.index=this.restaurants.findIndex(e=>e.resid==id)
      return this.restaurants[this.index].resname
    }

    getrestimagebysingleid(imageid:any){
      this.index=this.restaurants.findIndex(e=>e.resid==imageid)
      return this.restaurants[this.index].resimage
    }







}
