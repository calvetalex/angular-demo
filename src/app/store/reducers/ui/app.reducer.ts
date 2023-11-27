import { createReducer, on } from '@ngrx/store';
import { initialState } from '../../states/ui/app.states';
import { UiActions } from '../../actions';

export const reducer = createReducer(
  initialState,
  on(UiActions.µClear, () => initialState),
  on(UiActions.AppActions.µUpdateTitle, (state, { title }) => ({
    ...state,
    title,
  }))
);
