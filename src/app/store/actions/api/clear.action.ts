import { createAction } from '@ngrx/store';
import { API_SUBJECT, APP } from 'src/app/config/app.config';

export const µClear = createAction(`[${APP}][${API_SUBJECT}] Clear`);
