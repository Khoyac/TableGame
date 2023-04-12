import { Component, Input } from '@angular/core';
import {Player} from "../../../shared/classes/player";
import {Card} from "../../../shared/classes/card";
import {SocketWebService} from "../../../Services/socket-web.service";

@Component({
  selector: 'app-tablero',
  templateUrl: './tablero.component.html',
  styleUrls: ['./tablero.component.css']
})
export class TableroComponent {
  @Input() players!: Array<Player>;

}
