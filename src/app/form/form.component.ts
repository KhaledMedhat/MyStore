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

  is_valid: boolean = false;
  is_valid2: boolean = false;

  constructor(private router: Router) {}
  @Output() event_submite_form = new EventEmitter<any>();

  ngOnInit(): void {}

  onSubmit() {
    let form_info = {
      fullname: this.fullname,
      address: this.address,
    };
    this.event_submite_form.emit(form_info);
  }

  validateName($event) {
    this.check_validationName();
  }
  validateAddress($event) {
    this.check_validationAddress();
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
}
