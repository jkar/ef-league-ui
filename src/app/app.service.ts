import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AppState } from "../store/application/app.model";
import { Store } from "@ngrx/store";
import { environment } from "../environments/environment";
import { League } from "./models/league.model";
import { selectLeagues } from "../store/application/app.selector";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AppService {

  // leagues$: BehaviorSubject<League[]>([]);
  leagues$;

  constructor(
    private httpClient: HttpClient,
    private store: Store<{ appStore: AppState }>
  ) {
    this.leagues$ = this.store.select(selectLeagues);
  }
  baseUri = environment.efEndpoint;
  fetchLeagues(limit: number, offest: number) {
    const params = new HttpParams()
    .set('limit', limit.toString())
    .set('offset', offest.toString());
    return this.httpClient.get<League[]>(`${this.baseUri}/Leagues`, { params: params });
    // return this.httpClient.get<League[]>(`${this.baseUri}/Leagues`);

  }
}
