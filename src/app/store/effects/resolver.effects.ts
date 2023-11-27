import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { switchMap } from 'rxjs/operators';
import { ApiActions, ResolverActions, UiActions } from '../actions';

@Injectable()
export class Effects {
  constructor(private readonly _actions: Actions) {}

  reset$ = createEffect(() =>
    this._actions.pipe(
      ofType(ResolverActions.µResolve),
      switchMap((_) => [ApiActions.µClear(), UiActions.µClear()])
    )
  );
}
