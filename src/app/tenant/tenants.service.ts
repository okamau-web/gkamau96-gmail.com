
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Tenant } from './tenant-model';

@Injectable({
  providedIn: 'root'
})
export class TenantsService {
  private customersUrl = 'http://localhost:3000/mpangaji';

  constructor(private http: HttpClient) {}

  getCustomers(): Observable<Tenant[]> {
    return this.http.get<Tenant[]>(this.customersUrl);
  }

  getCustomerById(payload: number): Observable<Tenant> {
    return this.http.get<Tenant>(`${this.customersUrl}/${payload}`);
  }

  createCustomer(payload: Tenant): Observable<Tenant> {
    return this.http.post<Tenant>(this.customersUrl, payload);
  }

  updateCustomer(customer: Tenant): Observable<Tenant> {
    return this.http.patch<Tenant>(
      `${this.customersUrl}/${customer.id}`,
      customer
    );

  }

  deleteCustomer(payload: number) {
    return this.http.delete(`${this.customersUrl}/${payload}`);
  }
}
