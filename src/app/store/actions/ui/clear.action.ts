import { createAction } from '@ngrx/store';
import { APP, UI_SUBJECT } from 'src/app/config/app.config';

export const µClear = createAction(`[${APP}][${UI_SUBJECT}] Clear`);
