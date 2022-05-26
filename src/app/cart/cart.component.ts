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
  total_selected_items: number = 0;
  single_item_price: number = 0;
  total_price: number = 0;
  constructor(private serviceService: ServiceService, private router: Router) {}

  ngOnInit(): void {
    this.serviceService.getProductData().subscribe((data) => {
      this.cartItems = data;
      this.single_item_price = this.serviceService.getTotalAmount();
      this.total_price = this.single_item_price;

      for (let index = 0; index < data.length; index++) {
        const cartItems = data[index];
        cartItems['qty'] = 1;
      }
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

  upQty(selected_product: product): void {
    for (let i = 0; i < this.cartItems.length; i++) {
      if (this.cartItems[i].id == selected_product.id) {
        this.cartItems[i].qty += 1;
      }
    }
    this.calcuate_total_price();
  }

  downQty(selected_product: product): void {
    if (selected_product.qty > 1) {
      for (let i = 0; i < this.cartItems.length; i++) {
        if (this.cartItems[i].id == selected_product.id) {
          this.cartItems[i].qty -= 1;
        }
      }
    }
    this.calcuate_total_price();
  }

  calcuate_total_price() {
    this.total_price = 0;
    for (let i = 0; i < this.cartItems.length; i++) {
      this.total_price += this.cartItems[i].qty * this.cartItems[i].price;
    }
  }

  onClick() {
    this.router.navigate(['/payment']);
    this.serviceService.setData(this.total_price);
  }
}
