import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
})
export class PaymentComponent implements OnInit {
  show_form: boolean = true;
  submitted_data: any = {};

  constructor() {}

  ngOnInit(): void {}

  submit_form($event) {
    this.show_form = false;
    this.submitted_data = $event;
  }
}
