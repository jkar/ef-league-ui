import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { AppState } from "./app.model";
import { fetchLeaguesFailed, initFetchLeagues, setLeaguesSuccesful } from "./app.actions";
import { catchError, map, switchMap } from "rxjs";
import { AppService } from "../../app/app.service";

@Injectable()
export class AppEffects {

  fetchLeagues$;

  constructor(private actions$: Actions,
    private store: Store<{ appStore: AppState }>,
    private appService: AppService
  ) {

    this.fetchLeagues$ = createEffect(() =>
      {
      return this.actions$.pipe(
        ofType(initFetchLeagues),
        switchMap((actions) => {
            const { limit, offest, type } = actions;
            return this.appService.fetchLeagues(limit, offest).pipe(
              map( leagues => {
                this.store.dispatch(setLeaguesSuccesful({ value: leagues }));
              }),
              catchError(error => {
                console.log(error);
                this.store.dispatch(fetchLeaguesFailed({ value: error.message }));
                throw new Error(error.message);
              })
            )
        })
      )
    }, { dispatch: false });
    }
}
