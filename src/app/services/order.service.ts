import { Injectable } from '@angular/core';
import { CartService } from './cart.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  orderData: any[] = [];

  constructor(private cartService: CartService) { }

  createOrder() {
    const cartData = this.cartService.getcartData(); 
    if (cartData && Object.keys(cartData.cartItems).length > 0) {  
      const newOrder = {
        restaurantName: cartData.restaurantName,
        cartItems: cartData.cartItems,
        totalAmount: cartData.totalAmount,
        restaurantImage: cartData.restaurantImage
      };

      this.orderData.push(newOrder);  
    }
  }

  getOrderData() {
    return this.orderData;  
  }







}
