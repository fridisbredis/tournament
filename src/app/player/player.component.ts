import { Component, Input } from '@angular/core';
import { player } from '../models/player';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-player',
  imports: [MatIcon],
  templateUrl: './player.component.html',
  styleUrl: './player.component.sass'
})
export class PlayerComponent {
  @Input()
  player: player = {} as player;

  matchString: string = 'TBD';

  ngOnInit() {
    console.log("player", this.player);
  }
}
