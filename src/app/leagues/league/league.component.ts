import { Component, Input } from '@angular/core';
import { League } from '../../models/league.model';

@Component({
  selector: 'app-league',
  imports: [],
  templateUrl: './league.component.html',
  styleUrl: './league.component.css'
})
export class LeagueComponent {
  @Input() league: League | undefined;
}
