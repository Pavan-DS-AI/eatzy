import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Router } from '@angular/router';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  cartData: any = {};
  cartItems: any[] = [];
  totalAmount: number = 0;

  constructor(private cartService: CartService,private route:Router,private orderservice:OrderService) {}

  ngOnInit() {
    this.cartData = this.cartService.getcartData();
    if (this.cartData && this.cartData.cartItems) {
      this.cartItems = this.getCartItems();
      this.totalAmount = this.calculateTotalAmount();
    }

    console.log(this.cartData); // Debugging: Check data in console
  }

  getCartItems() {
    return Object.keys(this.cartData.cartItems).map(name => ({
      name,
      quantity: this.cartData.cartItems[name],
      price: this.cartService.getItemPrice(name) || 0, // Get price per item
      description: "Delicious food item" 
    }));
  }

  calculateTotalAmount() {
    return this.cartItems.reduce((total, item) => total + item.quantity * item.price, 0);
  }

  checkout() {

    alert('Proceeding to checkout...');
    this.orderservice.createOrder();
    this.route.navigateByUrl('/user/myorders')

  }

}
