import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrl: './offers.component.css'
})
export class OffersComponent {
  coupons:any
  paymentOffers:any
  constructor(private http:HttpClient){}
  ngOnInit() {
    this.http.get<any[]>('/assets/coupon.json').subscribe(data => {
      this.coupons = data.map(coupon => ({ ...coupon, showMore: false }));
    });
    this.http.get<any[]>('/assets/payment-offers.json').subscribe(data => {
      this.paymentOffers = data.map(offer => ({ ...offer, showMore: false }));
    });


  }

  applyCoupon(code: string): void {
    alert(`Coupon ${code} applied!`);
  }

  applyPaymentOffer(code: string): void {
    alert(`Payment offer ${code} applied!`);
  }

  toggleDetails(coupon: any): void {
    coupon.showMore = !coupon.showMore;
  }

  togglePaymentOfferDetails(paymentOffer: any): void {
    paymentOffer.showMore = !paymentOffer.showMore;
  }

}
