import { Injectable } from '@angular/core';
import { product } from './model/product';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  itemDetails: product[] = [];
  cartItems: product[] = [];
  productList = new BehaviorSubject<any>([]);
  constructor() {}

  getProductData() {
    return this.productList.asObservable();
  }

  setProduct(product: any) {
    this.cartItems.push(...product);
    this.productList.next(product);
  }

  addToCart(product: any) {
    this.cartItems.push(product);
    this.productList.next(this.cartItems);
    this.getTotalAmount();
  }

  getTotalAmount() {
    let price = 0;
    this.cartItems.map((a: any) => {
      price = price + a.price;
    });
    return price;
  }

  getProductDetails() {
    return this.itemDetails;
  }

  displayDetails(details: any) {
    this.itemDetails = [];
    this.itemDetails.push(details);
    return this.itemDetails;
  }

  removeItem(product: any) {
    this.cartItems.map((a: any, index) => {
      if (product.id === a.id) {
        this.cartItems.splice(index, 1);
      }
    });
    this.productList.next(this.cartItems);
  }

  removeCart() {
    this.cartItems = [];
    this.productList.next(this.cartItems);
  }
}
