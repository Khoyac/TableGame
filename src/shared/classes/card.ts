export class Card {
  public manaSeparated: any;

  constructor(
    public name: string,
    public image: string,
    public lan: string,
    public foil: boolean,
    public condition: string,
    public manaCost: string,
    public set: string,
    public stock: number,
  ) {
    this.dibujarMana(manaCost)
  }

  private dibujarMana(manaCost:string) {
    manaCost = manaCost.replace(/{|}/g, "");
    this.manaSeparated = manaCost.match(/\d+|[a-zA-Z]/g);
  }

}
