
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventService {

private eventsUrl = 'http://localhost:3000/api/events';

private specialEventsUrl = 'http://localhost:3000/api/special';


private propertyUrl = 'http://localhost:3000/api/property';


  constructor(private http: HttpClient) { }

getEvents() {
  return this.http.get<any>(this.eventsUrl);
}

getSpecialEvents() {
  return this.http.get<any>(this.specialEventsUrl);
}


getProperty() {
  return this.http.get<any>(this.propertyUrl);
}


}
