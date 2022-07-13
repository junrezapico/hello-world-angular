import { ActionReducerMap } from '@ngrx/store';
import {
  reducer as authReducer,
  initialState as authInitialState,
} from './auth/reducer';
import {
  reducer as counterReducer,
  initialState as counterInitialState,
} from './counter/reducer';

type AppState = {
  auth: typeof authInitialState;
  count: typeof counterInitialState;
};

export const reducers: ActionReducerMap<AppState, any> = {
  auth: authReducer,
  count: counterReducer,
};
