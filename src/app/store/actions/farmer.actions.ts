import { Action } from '@ngrx/store';

import { Update } from '@ngrx/entity';
import { Farmer } from 'src/app/model/farmers-model';


export enum FarmerActionTypes {
  LOAD_FARMERS = '[Farmer] Load Farmers',
  LOAD_FARMERS_SUCCESS = '[Farmer] Load Farmers Success',
  LOAD_FARMERS_FAIL = '[Farmer] Load Farmers Fail',
  LOAD_FARMER = '[Farmer] Load Farmer',
  LOAD_FARMER_SUCCESS = '[Farmer] Load Farmer Success',
  LOAD_FARMER_FAIL = '[Farmer] Load Farmer Fail',
  CREATE_FARMER = '[Farmer] Create Farmer',
  CREATE_FARMER_SUCCESS = '[Farmer] Create Farmer Success',
  CREATE_FARMER_FAIL = '[Farmer] Create Farmer Fail',
  UPDATE_FARMER = '[Farmer] Update Farmer',
  UPDATE_FARMER_SUCCESS = '[Farmer] Update Farmer Success',
  UPDATE_FARMER_FAIL = '[Farmer] Update Farmer Fail',
  DELETE_FARMER = '[Farmer] Delete Farmer',
  DELETE_FARMER_SUCCESS = '[Farmer] Delete Farmer Success',
  DELETE_FARMER_FAIL = '[Farmer] Delete Farmer Fail'
}

export class LoadFarmers implements Action {
  readonly type =FarmerActionTypes.LOAD_FARMERS;
}

export class LoadFarmersSuccess implements Action {
  readonly type =FarmerActionTypes.LOAD_FARMERS_SUCCESS;

  constructor(public payload: Farmer[]) { }
}

export class LoadFarmersFail implements Action {
  readonly type =FarmerActionTypes.LOAD_FARMERS_FAIL;

  constructor(public payload: string) { }
}

export class LoadFarmer implements Action {
  readonly type =FarmerActionTypes.LOAD_FARMER;

  constructor(public payload: number) { }
}

export class LoadFarmerSuccess implements Action {
  readonly type =FarmerActionTypes.LOAD_FARMER_SUCCESS;

  constructor(public payload: Farmer) { }
}

export class LoadFarmerFail implements Action {
  readonly type =FarmerActionTypes.LOAD_FARMER_FAIL;

  constructor(public payload: string) { }
}

export class CreateFarmer implements Action {
  readonly type =FarmerActionTypes.CREATE_FARMER;

  constructor(public payload: Farmer) { }
}

export class CreateFarmerSuccess implements Action {
  readonly type =FarmerActionTypes.CREATE_FARMER_SUCCESS;

  constructor(public payload: Farmer) { }
}

export class CreateFarmerFail implements Action {
  readonly type =FarmerActionTypes.CREATE_FARMER_FAIL;

  constructor(public payload: string) { }
}

export class UpdateFarmer implements Action {
  readonly type =FarmerActionTypes.UPDATE_FARMER;

  constructor(public payload: Farmer) { }
}

export class UpdateFarmerSuccess implements Action {
  readonly type =FarmerActionTypes.UPDATE_FARMER_SUCCESS;

  constructor(public payload: Update<Farmer>) { }
}

export class UpdateFarmerFail implements Action {
  readonly type =FarmerActionTypes.UPDATE_FARMER_FAIL;

  constructor(public payload: string) { }
}

export class DeleteFarmer implements Action {
  readonly type =FarmerActionTypes.DELETE_FARMER;

  constructor(public payload: number) { }
}

export class DeleteFarmerSuccess implements Action {
  readonly type =FarmerActionTypes.DELETE_FARMER_SUCCESS;

  constructor(public payload: number) { }
}

export class DeleteFarmerFail implements Action {
  readonly type =FarmerActionTypes.DELETE_FARMER_FAIL;

  constructor(public payload: string) { }
}

export type FActions =
| LoadFarmers
| LoadFarmersSuccess
| LoadFarmersFail
| LoadFarmer
| LoadFarmerSuccess
| LoadFarmerFail
| CreateFarmer
| CreateFarmerSuccess
| CreateFarmerFail
| UpdateFarmer
| UpdateFarmerSuccess
| UpdateFarmerFail
| DeleteFarmer
| DeleteFarmerSuccess
| DeleteFarmerFail;
