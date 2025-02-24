import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { TabsModule } from 'primeng/tabs';
import { AppState } from '../../store/application/app.model';
import { AppService } from '../app.service';
import { initFetchLeagues } from '../../store/application/app.actions';
import { Observable } from 'rxjs';
import { League } from '../models/league.model';
import { AsyncPipe } from '@angular/common';
import { LeagueComponent } from './league/league.component';

@Component({
  selector: 'app-leagues',
  imports: [AsyncPipe, TabsModule, LeagueComponent],
  templateUrl: './leagues.component.html',
  styleUrl: './leagues.component.css'
})
export class LeaguesComponent {

  leagues$: Observable<League[]>;

  constructor(private store: Store<{ appStore: AppState }>,
      private appService: AppService
  )
  {
    this.store.dispatch(initFetchLeagues({ limit: 5, offest: 0 }));
    this.leagues$ = this.appService.leagues$;
  }

  ngOnInit(): void {
  }
}
