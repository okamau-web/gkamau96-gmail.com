import { Property } from './model/property.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {


  private url = 'http://localhost:3000/facility';

  private img = 'http://localhost:3000/images';



  constructor(private http: HttpClient) { }



  getProperties() {
    return this.getAll<Property>();
  }

  getAll<T>(): Observable<T[]>{
    return this.http.get<T[]>(this.url);
  }

  getById<T,V>(payload: T): Observable<V> {
    return this.http.get<V>
      (`${this.url}/${payload}`);
  }

  getPropertyById(payload: number): Observable<Property> {
    return this.getById<number,Property>(payload)
    //http.get<Property>
     // (`${this.url}/${payload}`);
  }


  addProperty(payload: Property): Observable<Property> {
    return this.http.post<Property>(this.url, payload);
  }


  updateProperty(property: Property): Observable<Property> {
    return this.http.patch<Property>(
      `${this.url}/${property.id}`,
      property
    );

  }

  deleteProperty(payload: number) {
    return this.http.delete(`${this.url}/${payload}`);
  }




}
