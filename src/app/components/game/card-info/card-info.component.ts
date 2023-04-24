import { Component } from '@angular/core';
import {VistaCartaAmpliadaService} from "../../../../Services/vista-carta-ampliada.service";
import {Card} from "../../../../shared/classes/card";

@Component({
  selector: 'app-card-info',
  templateUrl: './card-info.component.html',
  styleUrls: ['./card-info.component.css']
})
export class CardInfoComponent {
  carta: Card = new Card(
    -1,
    'Unknown',
    'assets/img/back-card.jpg',
    'Unknown',
    false,
    'Unknown',
    '{0}',
    'Unknown',
    0,
    0,
    0
  );
  constructor(private vistaCartaAmpliada: VistaCartaAmpliadaService) {
    //this.carta.image = 'img/back-card.jpg';
  }


  ngOnInit() {

    this.vistaCartaAmpliada.change.subscribe(card => {
      this.carta = card;
    });
  }
}
