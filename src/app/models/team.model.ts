import { Coach } from "./coach.model";
import { Player } from "./player.model";

export interface Team {
  id: string,
  name: string,
  coach: Coach,
  players: Player[]
}
