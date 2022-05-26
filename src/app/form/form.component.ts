import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  fullname: string;
  address: string;
  creditCardNumber: string;
  is_valid: boolean = false;
  is_valid2: boolean = false;
  is_valid3: boolean = false;

  constructor(private router: Router) {}
  @Output() event = new EventEmitter<string>();

  ngOnInit(): void {}

  onSubmit() {
    this.event.emit(this.fullname);
    this.event.emit(this.address);
    this.router.navigate(['/confirmation']);
  }

  validateName($event) {
    this.check_validationName();
  }
  validateAddress($event) {
    this.check_validationAddress();
  }
  validateCredit($event) {
    this.check_validationCredit();
  }

  check_validationName() {
    if (this.fullname.length > 3) {
      this.is_valid = true;
    } else {
      this.is_valid = false;
    }
  }

  check_validationAddress() {
    if (this.address.length > 4) {
      this.is_valid2 = true;
    } else {
      this.is_valid2 = false;
    }
  }

  check_validationCredit() {
    if (this.creditCardNumber.length == 16) {
      this.is_valid3 = true;
    } else {
      this.is_valid3 = false;
    }
  }
}
