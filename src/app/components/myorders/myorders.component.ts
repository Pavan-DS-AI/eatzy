import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-myorders',
  templateUrl: './myorders.component.html',
  styleUrl: './myorders.component.css'
})
export class MyordersComponent {

  ordersdata: any[] = [];

  constructor(private orderservice: OrderService) { }

  ngOnInit() {
    this.ordersdata = this.orderservice.getOrderData();

    if (this.ordersdata.length === 0) {
      console.log("No orders placed yet");
    }
  }



}
