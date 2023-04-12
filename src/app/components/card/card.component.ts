import {Component, HostListener, Input} from '@angular/core';
import {Card} from "../../../shared/classes/card";
import {VistaCartaAmpliadaService} from "../../../Services/vista-carta-ampliada.service";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() card!: Card;
  currentCard: Card | undefined;
  opContadores: boolean = false;
  rotate: any;

  constructor(private vistaCartaAmpliada: VistaCartaAmpliadaService) {

  }

  @HostListener('contextmenu', ['$event'])
  onContextMenu(event: MouseEvent) {
    event.preventDefault();
  }

  vistaAmpliada (carta:Card) {
    this.vistaCartaAmpliada.mostrarCarta(carta);
  }

  abrirMenuContadores() {
    this.opContadores = !this.opContadores;
  }

  tapCarta() {
    this.rotate = 90;
  }
}


