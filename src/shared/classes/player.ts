import {Card} from "./card";

export class Player {

  constructor(
    public name: string,
    public life: number,

    public poison: number,
    public experience: number,
    public energy: number,

    public hand: Array<Card>,
    public library: Array<Card>,
    public graveyard: Array<Card>,
    public exiled: Array<Card>,
    public inGame: Array<Card>
  ) {
  }


}
