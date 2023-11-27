import { combineReducers, Action } from '@ngrx/store';
import { UiState } from '../../states/ui';
import { APP_MAIN } from 'src/app/config/app.config';
import { reducer as AppMainReducer } from './app.reducer';

export function reducers(state: UiState | undefined, action: Action) {
  return combineReducers({
    [APP_MAIN]: AppMainReducer,
  })(state, action);
}
