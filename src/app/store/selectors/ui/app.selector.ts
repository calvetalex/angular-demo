import { createSelector } from '@ngrx/store';
import { featureSelector } from '../feature.selector';
import { APP_MAIN } from 'src/app/config/app.config';

export const $uiSelector = createSelector(featureSelector, ({ ui }) => ui);

export const $appUiSelector = createSelector(
  $uiSelector,
  ({ [APP_MAIN]: data }) => data
);

export const $appTitle = createSelector($appUiSelector, ({ title }) => title);

export const $appNavigationItems = createSelector(
  $appUiSelector,
  ({ navigation }) => navigation
);
