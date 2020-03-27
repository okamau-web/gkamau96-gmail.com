import { Router } from '@angular/router';
import * as propertyActions from '../store/actions/property.action'
import { Component, OnInit, } from '@angular/core';
import *as fromProperty from '../store/reducer/property.reducer';
import { Store } from '@ngrx/store';
import { Property } from './../model/property.model';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-property',
  templateUrl: './edit-property.component.html',
  styleUrls: ['./edit-property.component.css']
})
export class EditPropertyComponent implements OnInit {

  propertyForm: FormGroup;

  constructor(
    private store: Store<fromProperty.AppState>,
    private router: Router,
    private fb: FormBuilder
  ) { }

  ngOnInit() {

    this.propertyForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', Validators.required],
      location: ['', Validators.required],
      numberOfUnits: ['', Validators.required],
      ownership: ['', Validators.required],
      pic: ['', Validators.required],
      id: null

    })


    const property$: Observable<Property> =
      this.store.select(
        fromProperty.getCurrentProperty
      );

    property$.subscribe(currentProperty => {
      if (currentProperty) {
        this.propertyForm.patchValue({
          name: currentProperty.name,
          description: currentProperty.description,
          numberOfUnits: currentProperty.numberOfUnits,
          location: currentProperty.location,
          price: currentProperty.price,
          ownership: currentProperty.ownership,
          pic: currentProperty.pic,
          id: currentProperty.id


        });
      }

    });

  }

  updateProperty() {
    const updatedProperty: Property = {
      name: this.propertyForm.get('name').value,
      description: this.propertyForm.get('description').value,
      location: this.propertyForm.get('location').value,
      numberOfUnits: this.propertyForm.get('numberOfUnits').value,
      price: this.propertyForm.get('price').value,
      ownership: this.propertyForm.get('ownership').value,
      pic: this.propertyForm.get('pic').value,
      id: this.propertyForm.get('id').value

    }

    this.store.dispatch(new propertyActions.
      UpdateProperty(updatedProperty));
    this.router.navigate(['/property']);


  }
}
