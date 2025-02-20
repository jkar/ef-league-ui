import { AppState } from "./app.model";

export const selectAppState = ( state: { appStore: AppState } ) => state.appStore;

export const selectLeagues = ( state: { appStore: AppState } ) => state.appStore.leagues;
