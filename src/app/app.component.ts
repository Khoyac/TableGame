import { Component } from '@angular/core';
import {Player} from "../shared/classes/player";
import {Card} from "../shared/classes/card";
import {SocketWebService} from "../Services/socket-web.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TableGame';

  card1 = new Card(1,"Regal Bloodlord", "https://cards.scryfall.io/large/front/8/8/887efa4e-f713-4165-a7e1-b0f00ac81784.jpg?1541007928", "en", false, "n", "", "",1, 0, 0);
  card2 = new Card(2,"Regal Bloodlord", "https://cards.scryfall.io/large/front/d/6/d6862005-32d1-473e-a28b-5dfc4b7782cd.jpg?1562383050", "en", false, "n", "", "",1, 0, 0);
  card3 = new Card(3,"Regal Bloodlord", "https://cards.scryfall.io/large/front/f/e/fe0c708d-771f-4356-8525-932d2690989b.jpg?1605329417", "en", false, "n", "", "",1, 0, 0);

  public p1 = new Player("Khoyac", 40, 3, 0, 0, [], [], [], [], [this.card1, this.card2, this.card3])
  public p2 = new Player("Juan", 40, 0, 0, 0, [], [], [], [], [])
  public p3 = new Player("Elias", 40, 0, 0, 0, [], [], [], [], [])
  public p4 = new Player("JE", 40, 0, 0, 0, [], [], [], [], [])

  players = [this.p1, this.p2, this.p3, this.p4];

  subscription!: Subscription;

  constructor(private socketWebService: SocketWebService) {}

  ngOnInit() {
    this.socketWebService.on('mensaje', (data: any) => {
      console.log(`Recibido mensaje del servidor: ${data}`);
    });

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  cards = [
    {
      "Name": "Regal Bloodlord",
      "Set code": "M19",
      "Set name": "Core Set 2019",
      "Collector number": 222,
      "Foil": "normal",
      "Rarity": "uncommon",
      "Quantity": 2,
      "ManaBox ID": 1090,
      "Scryfall ID": "65a75d3a-58cb-4ee0-88d3-52099cb57ac3",
      "Purchase price": 0.11,
      "Misprint": false,
      "Altered": false,
      "Condition": "near_mint",
      "Language": "es",
      "Purchase price currency": "EUR"
    }]
}
