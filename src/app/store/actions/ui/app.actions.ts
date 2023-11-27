import { createAction, props } from '@ngrx/store';
import { APP, UI_SUBJECT } from 'src/app/config/app.config';

export const µUpdateTitle = createAction(
  `[${APP}][${UI_SUBJECT}] Update page title`,
  props<{ title: string }>()
);
