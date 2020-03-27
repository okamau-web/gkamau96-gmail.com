import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as customerActions from '../../store/actions/tenant.actions';
import * as fromCustomer from '../../store/reducer/tenant.reducer';
import { Tenant } from '../tenant-model';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  propertys = ['Blessed House', 'Garden City', 'Breeze Point', 'ABC Apartments'];
  units = ['BH408', 'GC5', 'BP1', 'C7', 'F3', 'SQ6', 'V8', 'Q7'];

  customerForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private store: Store<fromCustomer.AppState>
  ) { }

  ngOnInit() {
    this.customerForm = this.fb.group({
      firstName: ['', Validators.required],
      otherNames: ['', Validators.required],
      phone: ['', Validators.required],
      address: ['', Validators.required],
      property: ['', Validators.required],
      unit: ['', Validators.required],
      terms: ['', Validators.required],
      email: ['', Validators.required]
    });
  }

  createCustomer() {
    const newCustomer: Tenant = {
      firstName: this.customerForm.get('firstName').value,
      otherNames: this.customerForm.get('otherNames').value,
      phone: this.customerForm.get('phone').value,
      address: this.customerForm.get('address').value,
      property: this.customerForm.get('property').value,
      unit: this.customerForm.get('unit').value,
      email: this.customerForm.get('email').value,
      terms: this.customerForm.get('terms').value,
    };

    this.store.dispatch(new customerActions.CreateCustomer(newCustomer));

    this.customerForm.reset();
  }
}


