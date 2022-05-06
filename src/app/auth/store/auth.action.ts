import { Action } from '@ngrx/store';

// invece di login e signup (come pure per la coppia login_fail
// e signup_fail) siccome fanno le stesse cose, potrei rinominarle e fare in modo
// che siano condivise. ad esempio creare AUTHENTICATE_SUCCESS e AUTHENTICATE_FAIL

export const LOGIN_START = 'LOGIN_START';
export const LOGIN = 'LOGIN';
export const LOGIN_FAIL = 'LOGIN_FAIL';
export const LOGOUT = 'LOGOUT';
export const SINGUP_START = 'SIGNUP_START';
export const CLEAR_ERROR = 'CLEAR_ERROR';

export const AUTO_LOGIN = 'AUTO_LOGIN';
// export const SIGNUP = 'SIGNUP'; NON LE RINOMINO PER NON FARE UN MACELLO,
// ma signup corrisponse a login ora

export class AutoLogin implements Action {
  readonly type = AUTO_LOGIN;
}

export class ClearError implements Action {
  readonly type = CLEAR_ERROR;
}

export class Login implements Action {
  readonly type = LOGIN;

  constructor(
    public payload: {
      email: string;
      userId: string;
      token: string;
      expirationDate: Date;
    }
  ) {}
}

export class SignupStart implements Action {
  readonly type = SINGUP_START;

  constructor(public payload: { email: string; password: string }) {}
}

export class Logout implements Action {
  readonly type = LOGOUT;
}

export class LoginStart implements Action {
  readonly type = LOGIN_START;

  constructor(public payload: { email: string; password: string }) {}
}

export class LoginFail implements Action {
  readonly type = LOGIN_FAIL;

  constructor(public payload: string) {}
}

export type AuthActions =
  | ClearError
  | SignupStart
  | Login
  | Logout
  | LoginStart
  | LoginFail
  | AutoLogin;
