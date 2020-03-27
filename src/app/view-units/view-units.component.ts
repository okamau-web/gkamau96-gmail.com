import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-units',
  templateUrl: './view-units.component.html',
  styleUrls: ['./view-units.component.css']
})
export class ViewUnitsComponent implements OnInit {
unitList: string[] = [ 'Vaccant Units', 'Occupied Units'];
  constructor() { }

  ngOnInit() {
  }

}
