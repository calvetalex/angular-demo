import { combineReducers, Action, ActionReducerMap } from '@ngrx/store';
import { AppState, State } from '../states';
import { reducers as ApiReducers } from './api';
import { reducers as UiReducers } from './ui';
import { InjectionToken } from '@angular/core';
import { APP } from 'src/app/config/app.config';

export function AppReducers(state: AppState | undefined, action: Action) {
  return combineReducers({
    api: ApiReducers,
    ui: UiReducers,
  })(state, action);
}

export const reducers = new InjectionToken<ActionReducerMap<State, Action>>(
  APP,
  {
    factory: () => ({
      [APP]: AppReducers,
    }),
  }
);
