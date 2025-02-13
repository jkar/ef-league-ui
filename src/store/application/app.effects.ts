import { Injectable } from "@angular/core";
import { Actions } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { AppState } from "./app.model";

@Injectable()
export class AppEffects {

  // fetchLeagues$;

  constructor(private actions$: Actions,
    private store: Store<{ appStore: AppState }>,
  ) {

  }
}
