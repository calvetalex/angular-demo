import { APP_MAIN } from 'src/app/config/app.config';
import { AppGlobalDataStateUi } from './app.states';

export interface UiState {
  [APP_MAIN]: AppGlobalDataStateUi;
}
