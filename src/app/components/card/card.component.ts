import {Component, HostListener, Input} from '@angular/core';
import {Card} from "../../../shared/classes/card";
import {VistaCartaAmpliadaService} from "../../../Services/vista-carta-ampliada.service";
import {SocketWebService} from "../../../Services/socket-web.service";

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
  x = 0;
  y = 0;

  constructor(private vistaCartaAmpliada: VistaCartaAmpliadaService,
              private socketWebService: SocketWebService) {

  }

  @HostListener('contextmenu', ['$event'])
  onContextMenu(event: MouseEvent) {
    event.preventDefault();
  }

  ngOnInit(): void {
    // Escuchar el evento de movimiento de la tarjeta
    this.socketWebService.fromEvent('card_moved').subscribe((data: any) => {
      console.log(`Card moved message received: ${JSON.stringify(data)}`);
      // Actualiza la posición de la tarjeta
      this.x = data.x;
      this.y = data.y;
    });
  }

  onMove(event: MouseEvent) {
    this.x = event.clientX;
    this.y = event.clientY;
    console.log(`Card moved message received: ${this.x}`);
    // Enviar la posición actual a través del socket
    this.socketWebService.emit('move_card', { x: this.x, y: this.y });
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


