import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartData: any = { cartItems: {} };
  private itemPrices: { [key: string]: number } = {};

  constructor() {}

  setCartData(data: any) {
    this.cartData = data;
  }

  getcartData() {
    return this.cartData;
  }
  
  setItemPrice(itemName: string, price: number) {
    this.itemPrices[itemName] = price;
  }

  getItemPrice(itemName: any): number {
    return this.itemPrices[itemName] || 0; 
  }
  
}
