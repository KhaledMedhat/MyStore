import { Component, OnInit } from '@angular/core';
import { product } from '../model/product';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartItems: product[] = [];
  total: any;
  normalPrice: any;
  constructor(private serviceService: ServiceService, private router: Router) {}

  ngOnInit(): void {
    this.serviceService.getProductData().subscribe((data) => {
      this.cartItems = data;
      this.normalPrice = this.serviceService.getTotalAmount();
      for (let index = 0; index < data.length; index++) {
        const cartItems = data[index];
        cartItems['qty'] = 1;
      }
      // this.total = this.serviceService.getTotalAmount();
      // console.log(this.total);
    });
  }

  removeItem(item: any) {
    this.serviceService.removeItem(item);
    alert('Item Deleted.');
  }

  removeCart() {
    this.serviceService.removeCart();
    alert('Cart Deleted.');
  }
  upQty(cartItems: product): void {
    cartItems.qty += 1;
    if (this.total == undefined) {
      this.total = cartItems.qty * cartItems.price;
      console.log(this.total);
    } else {
      if (this.cartItems.length == 1) {
        this.total = 0;
        this.total += cartItems.qty * cartItems.price;
      } else {
        this.total += cartItems.qty * cartItems.price;
      }
    }
  }

  downQty(cartItems: product): void {
    cartItems.qty -= 1;
    if (this.total == undefined) {
      this.total = cartItems.qty * cartItems.price;
      console.log(this.total);
    } else {
      if (this.cartItems.length == 1) {
        this.total = 0;
        this.total -= cartItems.qty * cartItems.price;
      } else {
        this.total -= cartItems.qty * cartItems.price;
      }
      console.log(this.total);
    }
  }

  onClick() {
    this.router.navigate(['/form']);
  }
}
