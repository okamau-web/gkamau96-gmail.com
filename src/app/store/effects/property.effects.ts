
import { Injectable } from '@angular/core';

import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';

import { Observable, of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
 import * as propertyActions from '../actions/property.action';
import { PropertyService } from '../../property.service';

import { Property } from '../../model/property.model';

@Injectable()
export class PropertyEffect {
  constructor(
    private actions$: Actions,
    private propertyService: PropertyService
  ) {}

  @Effect()
  loadProperties$: Observable<Action> =
  this.actions$.pipe(
    ofType<propertyActions.LoadProperties>(
      propertyActions.PropertyActionTypes.
      LOAD_PROPERTIES
    ),
    mergeMap(() =>
      this.propertyService.getProperties().pipe(
        map(
          (properties: Property[]) =>
            new propertyActions.LoadPropertiesSuccess(properties)
        ),
        catchError(err => of(new propertyActions.LoadPropertiesFail(err)))
      )
    )
  );

  @Effect()
  loadProperty$: Observable<Action> = this.actions$.pipe(
    ofType<propertyActions.LoadProperty>(
      propertyActions.PropertyActionTypes.LOAD_PROPERTY
    ),
    mergeMap((action: propertyActions.LoadProperty) =>
      this.propertyService.getPropertyById(action.payload).pipe(
        map(
          (property: Property ) =>
            new propertyActions.LoadPropertySuccess(property)
        ),
        catchError(err => of(new propertyActions.LoadPropertyFail(err)))
      )
    )
  );

  @Effect()
  AddProperty$: Observable<Action> =
  this.actions$.pipe(
    ofType<propertyActions.AddProperty>(
      propertyActions.PropertyActionTypes.ADD_PROPERTY
    ),
    map((action: propertyActions.AddProperty) => action.payload),
    mergeMap((property: Property) =>
      this.propertyService.addProperty(property).pipe(
        map(
          (newProperty: Property) =>
            new propertyActions.AddPropertySuccess(
              newProperty)
        ),
        catchError(err => of(new propertyActions.AddPropertyFail(err)))
      )
    )
  );

  @Effect()
  updateProperty$: Observable<Action> =
  this.actions$.pipe(
    ofType<propertyActions.UpdateProperty>(
      propertyActions.PropertyActionTypes.UPDATE_PROPERTY
    ),
    map((action: propertyActions.UpdateProperty) => action.payload),
    mergeMap((property: Property) =>
      this.propertyService.updateProperty(property).pipe(
        map(
          (updateProperty: Property) =>
            new propertyActions.UpdatePropertySuccess({
              id: updateProperty.id,
              changes: updateProperty
            })
        ),
        catchError(err =>
          of(new propertyActions.UpdatePropertyFail(err)))
      )
    )
  );

  @Effect()
  deleteProperty$: Observable<Action> = this.actions$.pipe(
    ofType<propertyActions.DeleteProperty>(
      propertyActions.PropertyActionTypes.DELETE_PROPERTY
    ),
    map((action: propertyActions.DeleteProperty) =>
     action.payload),
    mergeMap((id: number) =>
      this.propertyService.deleteProperty(id).pipe(
        map(() =>
        new propertyActions.DeletePropertySuccess(id)),
        catchError(err =>
          of(new propertyActions.DeletePropertyFail(err)))
      )
    )
  );
}
