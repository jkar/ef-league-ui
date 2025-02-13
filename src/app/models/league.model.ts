import { Team } from "./team.model";

export interface League {
  id: string,
  name: string,
  country: string,
  teams: Team[],
  // referees: Referee[]
}
