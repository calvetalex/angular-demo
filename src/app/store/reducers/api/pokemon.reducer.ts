import { createReducer, on } from '@ngrx/store';
import { initialState } from '../../states/api/pokemon.states';
import { ApiActions } from '../../actions';

export const reducer = createReducer(
  initialState,
  on(ApiActions.µClear, () => initialState)
);
