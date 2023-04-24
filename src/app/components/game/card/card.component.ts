import {Component, HostListener, Input, OnInit} from '@angular/core';
import {Card} from "../../../../shared/classes/card";
import {VistaCartaAmpliadaService} from "../../../../Services/vista-carta-ampliada.service";
import {SocketWebService} from "../../../../Services/socket-web.service";
import {CdkDragEnd, CdkDragMove, CdkDragStart} from "@angular/cdk/drag-drop";

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

  public xPos: number = 0;
  public yPos: number = 0;
  public selectedCardId: number | null = null;

  constructor(private vistaCartaAmpliada: VistaCartaAmpliadaService,
              private socketWebService: SocketWebService) {

  }

  @HostListener('contextmenu', ['$event'])
  onContextMenu(event: MouseEvent) {
    event.preventDefault();
  }

  ngOnInit(): void {
    this.selectedCardId = this.card.id;
    // Suscríbete al evento 'card_moved'
    this.socketWebService.on('card_moved', (data: any) => {
      //console.log('Me llega un Drop en ' + JSON.stringify(data));
      // Extraer los valores x e y del objeto data
      if (data.id === this.selectedCardId) {
        this.xPos = data.x;
        this.yPos = data.y;
        console.log('La carta se movió a las coordenadas x=' + this.xPos + ', y=' + this.yPos);
      }
      // Realiza alguna acción con los datos recibidos

    });

    document.addEventListener('mousemove', (event) => {
      const x = event.clientX;
      const y = event.clientY;
     // console.log(`Coordenadas del ratón: x=${x}, y=${y}`);
    });
  }

  drop(event: CdkDragEnd, carta: Card): void {
    this.x = event.dropPoint.x;
    this.y = event.dropPoint.y;
    // Llamada al método emit para enviar el evento card_moved al servidor
    this.socketWebService.emit('move_card', {id: carta.id, x: this.x, y: this.y});
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

  drag(event: CdkDragStart) {
    console.log('s');
  }

  dragM($event: CdkDragMove<any>, card: Card) {
    console.log($event.pointerPosition)
    this.x = $event.pointerPosition.x;
    this.y = $event.pointerPosition.y;
    this.socketWebService.emit('move_card', {id: card.id, x: this.x, y: this.y});
  }
}


