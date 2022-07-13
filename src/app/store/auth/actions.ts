import { Action } from '@ngrx/store';
 
export enum ActionTypes {
  SET_CURRENT_USER = 'SET_CURRENT_USER',
}
 
 
export class SetCurrentUser implements Action {
  readonly type = ActionTypes.SET_CURRENT_USER;
 
  constructor(public payload: { uid: string }) {}
}
 
export type ActionsUnion = SetCurrentUser;