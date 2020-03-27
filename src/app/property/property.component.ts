import * as propertyActions from '../store/actions/property.action'
import { Component, OnInit, ViewChild } from '@angular/core';
import *as fromProperty from '../store/reducer/property.reducer';
import { Store } from '@ngrx/store';
import { Property } from './../model/property.model';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css']
})
export class PropertyComponent implements OnInit {
  @ViewChild('propertyForm', { static: false }) formValues;
  newProperty: Property = {

    name: '',
    description: '',
    numberOfUnits: '',
    location: '',
    price: '',
    ownership: '',
    pic: ''
  };

  constructor(
    private store: Store<fromProperty.AppState>,
   ) { }

  ngOnInit() {

  }

  addProperty() {
    this.store.dispatch(new propertyActions.AddProperty(
      this.newProperty));
    this.newProperty = {

      name: '',
      description: '',
      numberOfUnits: '',
      location: '',
      price: '',
      ownership: '',
      pic: ''
    };

    this.formValues.resetForm();
}

}
