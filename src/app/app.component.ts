import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../store/application/app.model';
import { initFetchLeagues } from '../store/application/app.actions';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  title = 'ef-league';

  constructor(private store: Store<{ appStore: AppState }>,
      private appService: AppService
  )
  {}

  ngOnInit(): void {
    this.store.dispatch(initFetchLeagues({ limit: 5, offest: 0 }));
    this.appService.leagues$.subscribe(leagues => {
      console.log('leagues', leagues);
    })
  }
}
