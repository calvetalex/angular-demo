import { NavigationItem } from 'src/app/models/navigation.models';

export interface AppGlobalDataStateUi {
  title: string;
  navigation: NavigationItem[];
}

export const initialState: AppGlobalDataStateUi = {
  title: 'DEMO',
  navigation: [
    { label: 'app.navigation.settings' },
    { label: 'app.navigation.maze' },
    { label: 'app.navigation.pokedex' },
  ],
};
