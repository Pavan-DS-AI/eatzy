import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FooddetailsService } from '../../services/fooddetails.service';
import { RestaruantdetailsService } from '../../services/restaruantdetails.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-viewmenu',
  templateUrl: './viewmenu.component.html',
  styleUrl: './viewmenu.component.css'
})
export class ViewmenuComponent {
  restaurantId: any;
  restaurantName: any;
  restImage: any;
  option: any;
  menudetails: any[] = [];
  cart: { [key: string]: number } = {};

  constructor(
    private route: ActivatedRoute,
    private foodservice: FooddetailsService,
    private router: Router,
    private restaurantservice: RestaruantdetailsService,
    private cartService: CartService
  ) { }

  ngOnInit() {
    this.restaurantId = this.route.snapshot.paramMap.get('id');
    this.option = localStorage.getItem('option');
  
    this.foodservice.userentereddata(this.option, this.restaurantId);
    this.foodservice.getmenudata().subscribe(data => {
      this.menudetails = data;
  
      this.menudetails.forEach(item => {
        item.price = this.cartService.getItemPrice(item.name) || item.price; 
      });
  
    });
  
    this.restaurantName = this.restaurantservice.getrestnamebysingleid(this.restaurantId);
    this.restImage = this.restaurantservice.getrestimagebysingleid(this.restaurantId);
  }
  

  addToCart(item: any) {
    const existingResId = localStorage.getItem('cartResId');

    if (existingResId && existingResId !== this.restaurantId) {
      const confirmReplace = confirm('You already have items from another restaurant in your cart. Would you like to replace them?');
      if (!confirmReplace) {
        return; 
      } else {
        this.clearCart(); 
      }
    }

    if (!existingResId) {
      localStorage.setItem('cartResId', this.restaurantId);
    }

    if (this.cart[item.name]) {
      this.cart[item.name]++;
    } else {
      this.cart[item.name] = 1;
    }
    this.cartService.setItemPrice(item.name, item.price);
  }

  removeFromCart(item: any) {
    if (this.cart[item.name] && this.cart[item.name] > 0) {
      this.cart[item.name]--;

      if (Object.values(this.cart).every(qty => qty === 0)) {
        localStorage.removeItem('cartResId');
      }
    }
  }

  getQuantity(item: any) {
    return this.cart[item.name] || 0;
  }

  getTotalAmount() {
    let total = 0;
    this.menudetails.forEach(item => {
      if (this.cart[item.name]) {
        total += item.price * this.cart[item.name];
      }
    });
    return total;
  }

  viewCart() {
    if (Object.keys(this.cart).length === 0) {
      alert('Cart is empty!');
      return;
    }

    const cartData = {
      restaurantName: this.restaurantName,
      cartItems: this.cart,
      totalAmount: this.getTotalAmount(),
      restaurantImage: this.restImage
    };

    this.cartService.setCartData(cartData);
    this.router.navigateByUrl('/user/cart');
  }

  clearCart() {
    this.cart = {}; 
    localStorage.removeItem('cartResId'); 
    localStorage.setItem('cartResId', this.restaurantId);
  }

  setindprice(itemName: string) {
    return this.cartService.getItemPrice(itemName); 
  }
}
