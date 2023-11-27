import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { $appTitle } from './store/selectors/ui/app.selector';
import { µUpdateTitle } from './store/actions/ui/app.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title$ = this.store.pipe(select($appTitle));
  newTitle: string = '';

  constructor(private readonly store: Store<Record<string, unknown>>) {}

  updateTitle() {
    if (!this.newTitle) return;
    this.store.dispatch(µUpdateTitle({ title: this.newTitle }));
  }
}
