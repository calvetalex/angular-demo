import { createFeatureSelector } from '@ngrx/store';
import { AppState } from '../states';
import { APP } from 'src/app/config/app.config';

export const featureSelector = createFeatureSelector<AppState>(APP);
