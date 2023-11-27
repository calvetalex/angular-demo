export interface NavigationItem {
  label: string;
  imageUrl: string;
  // TODO: define a way to open a specific component inside app view without routing
  action?: () => {};
}
