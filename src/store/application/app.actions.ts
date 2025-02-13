import { createAction, props } from "@ngrx/store";
import { League } from "../../app/models/league.model";

export const initFetchLeagues = createAction(
  '[App Init Fetch Leagues] init fetch Posts',
  props<{ limit: number, offest: number }>()
);

export const setLeaguesSuccesful = createAction(
  '[App Fetch Leagues Succesfully] set leagues',
  props<{ value: League[] }>()
);

export const fetchLeaguesFailed = createAction(
  '[App Fetch Leagues Failed] fetch leagues failed',
  props<{ value: string }>()
);
