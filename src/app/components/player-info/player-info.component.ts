import {Component, Input} from '@angular/core';
import { Player } from 'src/shared/classes/player';

@Component({
  selector: 'app-player-info',
  templateUrl: './player-info.component.html',
  styleUrls: ['./player-info.component.css']
})
export class PlayerInfoComponent {
  @Input() player!: Player;

}
