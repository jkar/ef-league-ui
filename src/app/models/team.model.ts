import { Coach } from "./coach.model";
import { Player } from "./player.model";

export interface Team {
  id: string,
  name: string,
  // coachName: Coach,
  coachName: string,
  players: Player[]
}
