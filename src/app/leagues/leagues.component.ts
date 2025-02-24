import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { TabsModule } from 'primeng/tabs';
import { AppState } from '../../store/application/app.model';
import { AppService } from '../app.service';
import { initFetchLeagues } from '../../store/application/app.actions';
import { BehaviorSubject, combineLatest, map, Observable, pairwise, Subscription } from 'rxjs';
import { League } from '../models/league.model';
import { AsyncPipe } from '@angular/common';
import { LeagueComponent } from './league/league.component';
import { Team } from '../models/team.model';

@Component({
  selector: 'app-leagues',
  imports: [AsyncPipe, TabsModule, LeagueComponent],
  templateUrl: './leagues.component.html',
  styleUrl: './leagues.component.css'
})
export class LeaguesComponent {

  subscriptionArray: Subscription[] = [];
  leagues$: Observable<League[] | null>;
  selectedTeamName$ = new BehaviorSubject<string | null>('no team');
  changeTab$ = new BehaviorSubject<string | number | null>(null);
  combined$ : Observable<{
    leagues: League[] | null,
    selectedTeamName: string | null,
    team: Team | null
  }>;

  constructor(private store: Store<{ appStore: AppState }>,
      private appService: AppService
  )
  {
    this.store.dispatch(initFetchLeagues({ limit: 5, offest: 0 }));
    this.leagues$ = this.appService.leagues$;
    this.combined$ = combineLatest([
      this.leagues$,
      this.selectedTeamName$
    ]).pipe(
      map(([leagues, selectedTeamName]) => {
        let team: Team | null = null;
        if (leagues && leagues.length> 0 && selectedTeamName){
          leagues?.some(league => {
            league.teams.some(t => {
              if (t.name == selectedTeamName) {
                team = t;
                return true;
              }
              return false;
            })
          })

        }
        return { leagues, selectedTeamName, team }
      })
    )
  }

  ngOnInit(): void {
    this.subscriptionArray.push(
      this.changeTab$
      .pipe(
        pairwise()
      )
      .subscribe(([ oldValue, newValue]) => {
        console.log('old',oldValue)
        console.log('new', newValue)
        if (newValue && oldValue != newValue ) {
          this.selectedTeamName$.next(null);
        }
      })
    );
  }

  onSelectTeamName (name: string | null) {
    this.selectedTeamName$.next(name);
  }

  onChangeTab(value: string | number) {
     this.changeTab$.next(value);
  }
}
