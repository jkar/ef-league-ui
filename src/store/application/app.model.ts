import { Coach } from "../../app/models/coach.model";
import { League } from "../../app/models/league.model";
import { Player } from "../../app/models/player.model";
import { Team } from "../../app/models/team.model";
import { User } from "../../app/models/user.model";

export interface AppState {
  User: User | null,
  loading: boolean,
  error: string | null,
  leagues: League[],
  teams: Team[],
  // referees: Referee[],
  players: Player[],
  coach: Coach[]
}
