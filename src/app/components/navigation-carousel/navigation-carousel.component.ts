import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { $appNavigationItems } from 'src/app/store/selectors/ui/app.selector';

@Component({
  selector: 'app-navigation-carousel',
  templateUrl: './navigation-carousel.component.html',
  styleUrls: ['./navigation-carousel.component.scss'],
})
export class NavigationCarouselComponent {
  navigationItems$ = this.store.pipe(select($appNavigationItems));

  constructor(private readonly store: Store<Record<string, unknown>>) {}
}
