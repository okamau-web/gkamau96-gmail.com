import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Property } from './../model/property.model';
import { Store, select } from '@ngrx/store';
import * as propertyActions from '../store/actions/property.action';
import * as fromProperty from '../store/reducer/property.reducer';


@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {
  properties$: Observable<Property[]>;
  error$: Observable<String>;

  loading$: Observable<boolean>;
  constructor(
    private store: Store<fromProperty.AppState>,
    private router: Router,
  ) {}

  ngOnInit(){
    this.store.dispatch(new propertyActions.LoadProperties());
    this.properties$ = this.store.pipe(select(fromProperty.getProperties));
    this.error$ = this.store.pipe(select(fromProperty.getError));

  }

  deleteProperty(property: Property) {
    if (confirm('Are you sure you want to delete this property?')) {
      this.store.dispatch(new  propertyActions.DeleteProperty(property.id));

    }
  }
  editProperty(property: Property) {
    this.store.dispatch(new propertyActions.LoadProperty(property.id));
    this.router.navigate(["/editprop"])
  }

  viewUnits() {
    this.router.navigate(['/tenant-list']);
  }
}
