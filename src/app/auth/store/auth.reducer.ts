import * as AuthActions from './auth.action';
import { User } from './../user.model';

export interface State {
  user: User;
  authError: string; //just the error message here
  loading: boolean;
}

const initialState: State = {
  user: null,
  authError: null,
  loading: false,
};

export function authReducer(
  state = initialState,
  action: AuthActions.AuthActions
) {
  switch (action.type) {
    case AuthActions.LOGIN:
      const user = new User(
        action.payload.email,
        action.payload.userId,
        action.payload.token,
        action.payload.expirationDate
      );
      return {
        ...state,
        user: user,
        authError: null,
        loading: false,
      };

    case AuthActions.LOGOUT:
      return {
        ...state,
        user: null,
      };

    case AuthActions.LOGIN_START:
    case AuthActions.SINGUP_START:
      return {
        ...state,
        authError: null,
        loading: true,
      };

    case AuthActions.LOGIN_FAIL:
      return {
        ...state,
        user: null,
        authError: action.payload,
        loading: false,
      };

    case AuthActions.CLEAR_ERROR:
      return {
        ...state,
        authError: null,
      };

    default:
      return state;
  }
}
