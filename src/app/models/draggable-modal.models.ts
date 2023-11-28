export enum DIRECTION {
  LEFT = 'left',
  RIGHT = 'right',
  TOP = 'top',
  TOP_LEFT = 'topleft',
  TOP_RIGHT = 'topright',
  BOTTOM = 'bottom',
  BOTTOM_LEFT = 'bottomleft',
  BOTTOM_RIGHT = 'bottomright',
  DEFAULT = 'center',
}

export type Direction =
  | 'center'
  | 'top'
  | 'bottom'
  | 'left'
  | 'right'
  | 'topleft'
  | 'topright'
  | 'bottomleft'
  | 'bottomright';

export type DefaultObject = { [key: string]: string | number };
