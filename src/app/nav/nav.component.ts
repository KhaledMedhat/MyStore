import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  totalItems: number = 0;

  constructor(private serviceSerivce: ServiceService) {}

  ngOnInit(): void {
    this.serviceSerivce.getProductData().subscribe((data) => {
      this.totalItems = data.length;
    });
  }
}
