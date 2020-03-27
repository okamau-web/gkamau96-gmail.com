import { Action } from '@ngrx/store';
import { Property } from './../../model/property.model';
import { Update } from '@ngrx/entity';


export enum PropertyActionTypes {
  LOAD_PROPERTIES = '[Property] Load Properties',
  LOAD_PROPERTIES_SUCCESS = '[Property] Load Properties Success',
  LOAD_PROPERTIES_FAIL = '[Property] Load Properties Fail',

  LOAD_PROPERTY = '[Property] Load Property',
  LOAD_PROPERTY_SUCCESS = '[Property] Load Property Success',
  LOAD_PROPERTY_FAIL = '[Property] Load Property Fail',

  ADD_PROPERTY = '[Property] Add Property',
  ADD_PROPERTY_SUCCESS = '[Property] Add Property Success',
  ADD_PROPERTY_FAIL = '[Property] Add Property Fail',

  DELETE_PROPERTY = '[Property] Delete Property',
  DELETE_PROPERTY_SUCCESS = '[Property] Delete  Property Success',
  DELETE_PROPERTY_FAIL = '[Property] Delete Property Fail',

  UPDATE_PROPERTY = '[Property] Update Property',
  UPDATE_PROPERTY_SUCCESS = '[Property] Update Property Success',
  UPDATE_PROPERTY_FAIL = '[Property] Update Property Fail',

}

export class LoadProperties implements Action {
  readonly type = PropertyActionTypes.LOAD_PROPERTIES;
}
export class LoadPropertiesSuccess implements Action {
  readonly type = PropertyActionTypes.LOAD_PROPERTIES_SUCCESS;

  constructor(public payload: Property[]) { }
}
export class LoadPropertiesFail implements Action {
  readonly type = PropertyActionTypes.LOAD_PROPERTIES_FAIL;

  constructor(public payload: string) { }
}

export class LoadProperty implements Action {
  readonly type = PropertyActionTypes.LOAD_PROPERTY;

  constructor (public payload: number){}
}
export class LoadPropertySuccess implements Action {
  readonly type = PropertyActionTypes.LOAD_PROPERTY_SUCCESS;

  constructor(public payload: Property) { }
}
export class LoadPropertyFail implements Action {
  readonly type = PropertyActionTypes.LOAD_PROPERTY_FAIL;

  constructor(public payload: string) { }
}

export class AddProperty implements Action {
  readonly type = PropertyActionTypes.ADD_PROPERTY;

  constructor(public payload: Property) { }
}
export class AddPropertySuccess implements Action {
  readonly type = PropertyActionTypes.ADD_PROPERTY_SUCCESS;

  constructor(public payload: Property) { }
}
export class AddPropertyFail implements Action {
  readonly type = PropertyActionTypes.ADD_PROPERTY_FAIL;

  constructor(public payload: string) { }
}


export class UpdateProperty implements Action {
  readonly type = PropertyActionTypes.UPDATE_PROPERTY;

  constructor(public payload: Property) {}
}

export class UpdatePropertySuccess implements Action {
  readonly type = PropertyActionTypes.UPDATE_PROPERTY_SUCCESS;

  constructor(public payload: Update<Property>) {}
}

export class UpdatePropertyFail implements Action {
  readonly type = PropertyActionTypes.UPDATE_PROPERTY_FAIL;

  constructor(public payload: string) {}
}


export class DeleteProperty implements Action {
  readonly type = PropertyActionTypes.DELETE_PROPERTY;

  constructor(public payload: number) { }
}

export class DeletePropertySuccess implements Action {
  readonly type = PropertyActionTypes.DELETE_PROPERTY_SUCCESS;

  constructor(public payload: number) { }
}
export class DeletePropertyFail implements Action {
  readonly type = PropertyActionTypes.DELETE_PROPERTY_FAIL;

  constructor(public payload: string) { }
}

export type PropertyActions =
  | AddProperty
  | AddPropertySuccess
  | AddPropertyFail
  | DeleteProperty
  | DeletePropertySuccess
  | DeletePropertyFail
  | LoadProperty
  | LoadPropertyFail
  | LoadPropertySuccess
  | LoadProperties
  | LoadPropertiesFail
  | LoadPropertiesSuccess
  | UpdateProperty
  | UpdatePropertyFail
  | UpdatePropertySuccess
;
