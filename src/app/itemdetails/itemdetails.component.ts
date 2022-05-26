import { Component, OnInit } from '@angular/core';
import { product } from '../model/product';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-itemdetails',
  templateUrl: './itemdetails.component.html',
  styleUrls: ['./itemdetails.component.css'],
})
export class ItemdetailsComponent implements OnInit {
  itemDetails: product[] = [];

  constructor(private serviceService: ServiceService) {}

  ngOnInit(): void {
    this.itemDetails = this.serviceService.getProductDetails();
  }

  addToCart(item: any) {
    this.serviceService.addToCart(item);
    alert('Item Added.');
  }
}
