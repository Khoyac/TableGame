import {EventEmitter, Injectable, Output} from '@angular/core';
import { Card } from '../shared/classes/card';

@Injectable({
  providedIn: 'root'
})
export class JuegoService {
  constructor() { }

  @Output() change: EventEmitter<Card> = new EventEmitter<Card>();
  anyadirCarta(card: Card) {
    console.log(card)
    this.change.emit(card);
  }
}
