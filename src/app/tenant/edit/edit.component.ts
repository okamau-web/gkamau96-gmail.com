import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import { Observable } from 'rxjs';

import * as customerActions from '../../store/actions/tenant.actions';
import * as fromCustomer from '../../store/reducer/tenant.reducer';
import { Tenant } from '../tenant-model';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
   customerForm: FormGroup;
propertys = ['Blessed House', 'Garden City', 'Breeze Point','ABC Apartments'];
 units = ['BH408', 'GC5', 'BP1', 'C7', 'F3', 'SQ6','V8', 'Q7'];
  constructor(
    private fb: FormBuilder,
    private store: Store<fromCustomer.AppState>,
    private route: Router
  ) { }

  ngOnInit() {
    this.customerForm = this.fb.group({
      firstName: ['', Validators.required],
      otherNames: ['', Validators.required],
      phone: ['', Validators.required],
      address: ['', Validators.required],
      property: ['', Validators.required],
      unit: ['', Validators.required],
      terms:['', Validators.required],
      email:['', Validators.required],
      id: null
    });

    const customer$: Observable<Tenant> = this.store.select(
      fromCustomer.getCurrentCustomer
    );

    customer$.subscribe(currentCustomer => {
      if (currentCustomer) {
        this.customerForm.patchValue({
          firstName: currentCustomer.firstName,
          otherNames: currentCustomer.otherNames,
          phone: currentCustomer.phone,
          address: currentCustomer.address,
          property: currentCustomer.property,
         unit: currentCustomer.unit,
         terms: currentCustomer.terms,
          id: currentCustomer.id,
          email: currentCustomer.email,

        });
      }
    });
  }

  updateCustomer() {
    const updatedCustomer: Tenant = {
      firstName: this.customerForm.get('firstName').value,
      otherNames: this.customerForm.get('otherNames').value,
      phone: this.customerForm.get('phone').value,
      address: this.customerForm.get('address').value,
      property: this.customerForm.get('property').value,
      unit: this.customerForm.get('unit').value,
      id: this.customerForm.get('id').value,
      email:this.customerForm.get('email').value,
      terms: this.customerForm.get('terms').value
    };

    this.store.dispatch(new customerActions.UpdateCustomer(updatedCustomer));
    this.route.navigate(['/tenants']);
  }


}
