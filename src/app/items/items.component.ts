import { Component, OnInit } from '@angular/core';
import { APIService } from '../api.service';
import { product } from '../model/product';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css'],
})
export class ItemsComponent implements OnInit {
  items: product[] = [];
  constructor(
    private apiService: APIService,
    private serviceService: ServiceService
  ) {}

  ngOnInit(): void {
    this.apiService.getItems().subscribe((data) => {
      this.items = data;
      this.items.forEach((a: any) => {
        Object.assign(a, { quantity: 1, total: a.price });
      });
    });
  }

  addToCart(item: any) {
    this.serviceService.addToCart(item);
    alert('Item Added.');
  }
  displayDetails(details: any): void {
    this.serviceService.displayDetails(details);
  }
}
