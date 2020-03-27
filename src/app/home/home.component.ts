
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
latitude = -1.232605259884034;
longtude =  36.87887191772461;
locationChoosen = false;


  constructor() {}

  ngOnInit() {}

  chooseLocation(event){
    this.latitude = event.coords.lat;
    this.longtude = event.coords.log;
    this.locationChoosen = true;
  }
}
