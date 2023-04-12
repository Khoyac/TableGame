import { Component } from '@angular/core';
import {VistaCartaAmpliadaService} from "../../../Services/vista-carta-ampliada.service";
import {Card} from "../../../shared/classes/card";

@Component({
  selector: 'app-card-info',
  templateUrl: './card-info.component.html',
  styleUrls: ['./card-info.component.css']
})
export class CardInfoComponent {
  constructor(private vistaCartaAmpliada: VistaCartaAmpliadaService) {
  }
  carta!: Card;

  ngOnInit() {
    this.vistaCartaAmpliada.change.subscribe(card => {
      this.carta = card;
    });
  }
}
