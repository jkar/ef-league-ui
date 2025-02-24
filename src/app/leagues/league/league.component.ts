import { Component, EventEmitter, Input, Output } from '@angular/core';
import { League } from '../../models/league.model';

@Component({
  selector: 'app-league',
  imports: [],
  templateUrl: './league.component.html',
  styleUrl: './league.component.css'
})
export class LeagueComponent {
  @Input() league: League | undefined;
  @Output() selectTeamName = new EventEmitter<string | null>();

  onSelectTeamName (name: string | null) {
    this.selectTeamName.emit(name);
  }
}
