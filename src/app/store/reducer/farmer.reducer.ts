import * as farmerActions from '../actions/farmer.actions';
import { createFeatureSelector, createSelector } from '@ngrx/store';

import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import * as fromRoot from '../app.state';
import { Farmer } from 'src/app/model/farmers-model';

export interface farmerState extends EntityState<Farmer> {
  selectedFarmerId: number | null;
  loading: boolean;
  loaded: boolean;
  error: string;
}

export interface AppState extends fromRoot.AppState {
  farmers: farmerState;
}

export const farmerAdapter: EntityAdapter<Farmer> = createEntityAdapter<Farmer>();

export const defaultfarmer: farmerState = {
  ids: [],
  entities: {},
  selectedFarmerId: null,
  loading: false,
  loaded: false,
  error: ''
};

export const initialState = farmerAdapter.getInitialState(defaultfarmer);

export function farmerReducer(
  state = initialState,
  action: farmerActions.FActions
): farmerState {
  switch (action.type) {
    case farmerActions.FarmerActionTypes.LOAD_FARMERS_SUCCESS: {
      return farmerAdapter.addAll(action.payload, {
        ...state,
        loading: false,
        loaded: true
      });
    }
    case farmerActions.FarmerActionTypes.LOAD_FARMERS_FAIL: {
      return {
        ...state,
        entities: {},
        loading: false,
        loaded: false,
        error: action.payload
      };

    }

    case farmerActions.FarmerActionTypes.LOAD_FARMER_SUCCESS: {
      return farmerAdapter.addOne(action.payload, {
        ...state,
        selectedFarmerId: action.payload.id
      });
    }
    case farmerActions.FarmerActionTypes.LOAD_FARMER_FAIL: {
      return {
        ...state,
        error: action.payload
      };
    }

    case farmerActions.FarmerActionTypes.CREATE_FARMER_SUCCESS: {
      return farmerAdapter.addOne(action.payload, state);
    }
    case farmerActions.FarmerActionTypes.CREATE_FARMER_FAIL: {
      return {
        ...state,
        error: action.payload
      };
    }

    case farmerActions.FarmerActionTypes.UPDATE_FARMER_SUCCESS: {
      return farmerAdapter.updateOne(action.payload, state);
    }
    case farmerActions.FarmerActionTypes.UPDATE_FARMER_FAIL: {
      return {
        ...state,
        error: action.payload
      };
    }

    case farmerActions.FarmerActionTypes.DELETE_FARMER_SUCCESS: {
      return farmerAdapter.removeOne(action.payload, state);
    }
    case farmerActions.FarmerActionTypes.DELETE_FARMER_FAIL: {
      return {
        ...state,
        error: action.payload
      };
    }

    default: {
      return state;
    }
  }
}

const getFarmerFeatureState = createFeatureSelector<farmerState>(
  'farmers'
);

export const getFarmers = createSelector(
  getFarmerFeatureState,
  farmerAdapter.getSelectors().selectAll
);

export const getFarmersLoading = createSelector(
  getFarmerFeatureState,
  (state: farmerState) => state.loading
);

export const getFarmersLoaded = createSelector(
  getFarmerFeatureState,
  (state: farmerState) => state.loaded
);

export const getError = createSelector(
  getFarmerFeatureState,
  (state: farmerState) => state.error
);

export const getCurrentFarmerId = createSelector(
  getFarmerFeatureState,
  (state: farmerState) => state.selectedFarmerId
);
export const getCurrentFarmer = createSelector(
  getFarmerFeatureState,
  getCurrentFarmerId,
  state => state.entities[state.selectedFarmerId]
);
