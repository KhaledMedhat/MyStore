import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css'],
})
export class ConfirmationComponent implements OnInit {
  fullname;
  address;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  onClick() {
    this.router.navigate(['/']);
  }

  receiveData($event) {
    this.fullname, (this.address = $event);
  }
}
