import { APP } from 'src/app/config/app.config';
import { ApiState } from './api';
import { UiState } from './ui';

export interface AppState {
  api: ApiState;
  ui: UiState;
}

export interface State {
  [APP]: AppState;
}
