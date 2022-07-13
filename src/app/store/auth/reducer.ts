import { Action } from '@ngrx/store';
import { ActionTypes, ActionsUnion } from './actions';

export const initialState: {
  uid?: string;
} = {};

export const reducer = (
  state = initialState,
  action: ActionsUnion
): typeof initialState => {
  switch (action.type) {
    case ActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        uid: action.payload.uid,
      };
    case ActionTypes.SIGN_OUT:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};
