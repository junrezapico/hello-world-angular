import { Action } from '@ngrx/store';

export enum ActionTypes {
  SET_CURRENT_USER = 'SET_CURRENT_USER',
  SIGN_OUT = 'SIGN_OUT',
}

export class SetCurrentUser implements Action {
  readonly type = ActionTypes.SET_CURRENT_USER;

  constructor(public payload: { uid: string }) {}
}

export class SignOut implements Action {
  readonly type = ActionTypes.SIGN_OUT;
}

export type ActionsUnion = SetCurrentUser | SignOut;
