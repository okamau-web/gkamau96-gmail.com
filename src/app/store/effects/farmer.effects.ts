import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';

import { Observable, of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';

import * as farmerActions from '../actions/farmer.actions'

import { FarmersService } from 'src/app/farmers/farmers.service';
import { Farmer } from 'src/app/model/farmers-model';



@Injectable()
export class FarmerEffect {
  constructor(
    private actions$: Actions,
    private  FarmersService:FarmersService
  ) {}

  @Effect()
  loadFarmers$: Observable<Action> = this.actions$.pipe(
    ofType<farmerActions.LoadFarmers>(
      farmerActions.FarmerActionTypes.LOAD_FARMERS
    ),
    mergeMap((action: farmerActions.LoadFarmers) =>
      this.FarmersService.getFarmers().pipe(
        map(
          (farmers: Farmer[]) =>
            new farmerActions.LoadFarmersSuccess(farmers)
        ),
        catchError(err => of(new farmerActions.LoadFarmersFail(err)))
      )
    )
  );

  @Effect()
  LoadFarmer$: Observable<Action> = this.actions$.pipe(
    ofType<farmerActions.LoadFarmer>(
      farmerActions.FarmerActionTypes.LOAD_FARMER
    ),
    mergeMap((action: farmerActions.LoadFarmer) =>
      this.FarmersService.getFarmerById(action.payload).pipe(
        map(
          (farmer: Farmer ) =>
            new farmerActions.LoadFarmerSuccess(farmer)
        ),
        catchError(err => of(new farmerActions.LoadFarmerFail(err)))
      )
    )
  );

  @Effect()
  createFarmer$: Observable<Action> = this.actions$.pipe(
    ofType<farmerActions.CreateFarmer>(
      farmerActions.FarmerActionTypes.CREATE_FARMER
    ),
    map((action: farmerActions.CreateFarmer) => action.payload),
    mergeMap((farmer: Farmer) =>
      this.FarmersService.addFarmer(farmer).pipe(
        map(
          (newFarmer: Farmer) =>
            new farmerActions.CreateFarmerSuccess(newFarmer)
        ),
        catchError(err => of(new farmerActions.CreateFarmerFail(err)))
      )
    )
  );

  @Effect()
  updateFarmer$: Observable<Action> = this.actions$.pipe(
    ofType<farmerActions.UpdateFarmer>(
      farmerActions.FarmerActionTypes.UPDATE_FARMER
    ),
    map((action: farmerActions.UpdateFarmer) => action.payload),
    mergeMap((farmer: Farmer) =>
      this.FarmersService.updateFarmer(farmer).pipe(
        map(
          (updateFarmer: Farmer) =>
            new farmerActions.UpdateFarmerSuccess({
              id: updateFarmer.id,
              changes: updateFarmer
            })
        ),
        catchError(err => of(new farmerActions.UpdateFarmerFail(err)))
      )
    )
  );

  @Effect()
  deletefarmer$: Observable<Action> = this.actions$.pipe(
    ofType<farmerActions.DeleteFarmer>(
      farmerActions.FarmerActionTypes.DELETE_FARMER
    ),
    map((action: farmerActions.DeleteFarmer) => action.payload),
    mergeMap((id: number) =>
      this.FarmersService.deleteFarmer(id).pipe(
        map(() => new farmerActions.DeleteFarmerSuccess(id)),
        catchError(err => of(new farmerActions.DeleteFarmerFail(err)))
      )
    )
  );
}
