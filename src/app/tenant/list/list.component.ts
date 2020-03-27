import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

import * as customerActions from '../../store/actions/tenant.actions';
import * as fromCustomer from '../../store/reducer/tenant.reducer';
import { Tenant } from '../tenant-model';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {


 customers$: Observable<Tenant[]>;
  error$: Observable<String>;

  constructor(private store: Store<fromCustomer.AppState>,
    private route: Router) {}

  ngOnInit() {
    this.store.dispatch(new customerActions.LoadCustomers());
    this.customers$ = this.store.pipe(select(fromCustomer.getCustomers));
    this.error$ = this.store.pipe(select(fromCustomer.getError));
  }

  deleteCustomer(customer: Tenant) {
    if (confirm('Are You Sure You want to Delete the User?')) {
      this.store.dispatch(new customerActions.DeleteCustomer(customer.id));
    }
  }

  editCustomer(customer: Tenant) {
    this.store.dispatch(new customerActions.LoadCustomer(customer.id));
    this.route.navigate(['/edit']);
  }

}
