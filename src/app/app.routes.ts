import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LeaguesComponent } from './leagues/leagues.component';
import { ProgramComponent } from './program/program.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'leagues',
    component: LeaguesComponent
  },
  {
    path: 'program',
    component: ProgramComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];
