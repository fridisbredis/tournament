import { Component, Input } from '@angular/core';
import { player } from '../models/player';

@Component({
  selector: 'app-player',
  imports: [],
  templateUrl: './player.component.html',
  styleUrl: './player.component.sass'
})
export class PlayerComponent {
  @Input()
  player: player = {} as player;
}
