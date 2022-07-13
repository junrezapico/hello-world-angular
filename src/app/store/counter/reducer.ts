import { Action } from '@ngrx/store';
import { ActionTypes } from './actions';

export const initialState: number = 0;

export const reducer = (
  state = initialState,
  action: Action
): typeof initialState => {
  console.log('ANG COUNT', state);
  switch (action.type) {
    case ActionTypes.INCREMENT:
      return state + 1;

    case ActionTypes.DECREMENT:
      return state - 1;

    case ActionTypes.RESET:
      return 0;

    default:
      return state;
  }
};
