import { Property } from './../../model/property.model';
import * as fromRoot from '../app.state';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createSelector, createFeatureSelector } from '@ngrx/store';
import * as propertyActions from '../actions/property.action'

export interface PropertyState extends
  EntityState<Property> {
  selectedPropertyId: number | null;
  loading: boolean;
  loaded: boolean;
  error: string;
}
export interface AppState extends fromRoot.AppState {
  properties: PropertyState;
}

export const propertyAdapter: EntityAdapter<Property> =
 createEntityAdapter<Property>();

export const defaultProperty: PropertyState = {
  ids: [],
  entities: {},
  selectedPropertyId: null,
  loading: false,
  loaded: false,
  error: ''
};
export const initialState =
  propertyAdapter.getInitialState(defaultProperty);

export function propertyReducer(
  state = initialState,
  action: propertyActions.PropertyActions
): PropertyState {
  switch (action.type) {
    case propertyActions.PropertyActionTypes.LOAD_PROPERTIES_SUCCESS: {
      return propertyAdapter.addAll(action.payload, {
        ...state,
        loading: false,
        loaded: true
      });
    }
    case propertyActions.
      PropertyActionTypes.LOAD_PROPERTIES_FAIL: {
        return {
          ...state,
          entities: {},
          loading: false,
          loaded: false,
          error: action.payload
        };

      }

    case propertyActions.PropertyActionTypes.LOAD_PROPERTY_SUCCESS: {
      return propertyAdapter.addOne(action.payload, {
        ...state,
        selectedPropertyId: action.payload.id
      });
    }
    case propertyActions.PropertyActionTypes.LOAD_PROPERTY_FAIL: {
      return {
        ...state,
        error: action.payload
      };
    }

    case propertyActions.PropertyActionTypes.ADD_PROPERTY_SUCCESS: {
      return propertyAdapter.addOne(action.payload, state);
    }
    case propertyActions.PropertyActionTypes.ADD_PROPERTY_FAIL: {
      return {
        ...state,
        error: action.payload
      };
    }

    case propertyActions.PropertyActionTypes.UPDATE_PROPERTY_SUCCESS: {
      return propertyAdapter.updateOne(action.payload,
         state);
    }
    case propertyActions.PropertyActionTypes.
    UPDATE_PROPERTY_FAIL: {
      return {
        ...state,
        error: action.payload
      };
    }

    case propertyActions.PropertyActionTypes.DELETE_PROPERTY_SUCCESS: {
      return propertyAdapter.removeOne(action.payload, state);
    }
    case propertyActions.PropertyActionTypes.DELETE_PROPERTY_FAIL: {
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

const getPropertyFeatureState =
createFeatureSelector<PropertyState>(
  'properties'
);

export const getProperties = createSelector(
  getPropertyFeatureState,
  propertyAdapter.getSelectors().selectAll
);

export const getpropertiesLoading = createSelector(
  getPropertyFeatureState,
  (state: PropertyState) => state.loading
);

export const getpropertiesLoaded = createSelector(
  getPropertyFeatureState,
  (state: PropertyState) => state.loaded
);

export const getError = createSelector(
  getPropertyFeatureState,
  (state: PropertyState) => state.error
);

export const getCurrentPropertyId = createSelector(
  getPropertyFeatureState,
  (state: PropertyState) => state.selectedPropertyId
);
export const getCurrentProperty = createSelector(
  getPropertyFeatureState,
  getCurrentPropertyId,
  state => state.entities[state.selectedPropertyId]
);
