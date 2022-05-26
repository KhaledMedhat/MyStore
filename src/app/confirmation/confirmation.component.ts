import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';
@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css'],
})
export class ConfirmationComponent implements OnInit {
  price: any;
  @Input() submitted_data: any;

  constructor(private router: Router, private serviceService: ServiceService) {}

  ngOnInit(): void {
    this.price = this.serviceService.getData();
  }

  onClick() {
    this.router.navigate(['/']);
  }
}
