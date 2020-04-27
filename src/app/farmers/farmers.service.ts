import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Farmer } from '../model/farmers-model';
import { Observable } from 'rxjs';

@Injectable({

  providedIn: 'root'
})
export class FarmersService {


  private farmApi = 'http://localhost:3000/farmers';

  constructor(private http: HttpClient) { }


  getFarmers(): Observable<Farmer[]> {
    return this.http.get<Farmer[]>(this.farmApi);
  }

  getFarmerById(payload: number): Observable<Farmer> {
    return this.http.get<Farmer>(`${this.farmApi}/${payload}`);
  }

  addFarmer(payload: Farmer): Observable<Farmer> {
    return this.http.post<Farmer>(this.farmApi, payload);
  }

  updateFarmer(farmer: Farmer): Observable<Farmer> {
    return this.http.patch<Farmer>(
      `${this.farmApi}/${farmer.id}`,
      farmer
    );

  }

  deleteFarmer(payload: number) {
    return this.http.delete(`${this.farmApi}/${payload}`);
  }


}
