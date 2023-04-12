import {EventEmitter, Injectable, Output} from '@angular/core';
import {Card} from "../shared/classes/card";

@Injectable({
  providedIn: 'root'
})
export class VistaCartaAmpliadaService {

  constructor() { }

  @Output() change: EventEmitter<Card> = new EventEmitter<Card>();
  mostrarCarta(card: Card) {
    this.change.emit(card);
  }
}
