import { LogUser } from './../../model/login-user';

import {AuthActions , AuthActionTypes } from '../actions/auth.actions';


export interface AuthState {
  loggedIn: boolean;
  user: LogUser;
}

export const initialAuthState: AuthState = {
  loggedIn: false,
  user: undefined
};

export function AuthReducer(state = initialAuthState, action: AuthActions): AuthState {
  switch (action.type) {

    case AuthActionTypes.LoginAction:
      return {
        loggedIn: true,
        user: action.payload.user
      };

    case AuthActionTypes.LogoutAction:
        return {
          loggedIn: false,
          user: undefined
        };

    default:
      return state;
  }
}
