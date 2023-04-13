import {Component, HostListener, Input, OnInit} from '@angular/core';
import {Card} from "../../../shared/classes/card";
import {VistaCartaAmpliadaService} from "../../../Services/vista-carta-ampliada.service";
import {SocketWebService} from "../../../Services/socket-web.service";
import {CdkDragEnd, CdkDragMove} from "@angular/cdk/drag-drop";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() card!: Card;
  currentCard: Card | undefined;
  opContadores: boolean = false;
  rotate: any;
  @Input() value: string | undefined;
  @Input() suit: string | undefined;
  @Input() x: number | undefined;
  @Input() y: number | undefined;

  constructor(private vistaCartaAmpliada: VistaCartaAmpliadaService,
              private socketWebService: SocketWebService) {

  }

  @HostListener('contextmenu', ['$event'])
  onContextMenu(event: MouseEvent) {
    event.preventDefault();
  }

  ngOnInit(): void {
    // Suscríbete al evento 'card_moved'
    this.socketWebService.on('card_moved', (x: number, y: number) => {
      // Realiza alguna acción con los datos recibidos
      console.log('La carta se movió a las coordenadas x=' + x + ', y=' + y);
    });

  }

  drop(event: CdkDragEnd): void {
    this.x = event.dropPoint.x;
    this.y = event.dropPoint.y;
    // Llamada al método emit para enviar el evento card_moved al servidor
    this.socketWebService.emit('move_card', {x: this.x, y: this.y});
  }

  vistaAmpliada(carta: Card) {
    this.vistaCartaAmpliada.mostrarCarta(carta);
  }

  abrirMenuContadores() {
    this.opContadores = !this.opContadores;
  }

  tapCarta() {
    this.rotate = 90;
  }
}


