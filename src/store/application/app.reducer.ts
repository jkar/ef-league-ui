import { createReducer, on } from "@ngrx/store";
import { AppState } from "./app.model";
import { fetchLeaguesFailed, setLeaguesSuccesful } from "./app.actions";

const initialState: AppState = {
    User: null,
    loading: false,
    error: null,
    leagues: null,
    teams: [],
    // referees: Referee[],
    players: [],
    coach: []
};

export const appReducer = createReducer(
  initialState,
  on(setLeaguesSuccesful, (state, action) => {
    return { ...state, leagues: [...action.value], loading: false };
  }),
  on(fetchLeaguesFailed, (state, action) => {
    return { ...state, loading: false, error: action.value };
  }),
);
