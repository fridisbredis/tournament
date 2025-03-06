import { Component, EventEmitter, Input, Output } from '@angular/core';
import { player } from '../models/player';
import { MatIcon } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { TournamentService } from '../services/tournament-service';

@Component({
  selector: 'app-player',
  imports: [CommonModule, MatIcon],
  templateUrl: './player.component.html',
  styleUrl: './player.component.sass'
})
export class PlayerComponent {
  @Input()
  player: player = {} as player;

  @Input()
  matchId: number = 0;

  @Input()
  winner: boolean = false;

  @Output()
  winnerToggled = new EventEmitter<boolean>();

  constructor(private tournamentService: TournamentService) { }

  matchString: string = 'TBD';

  wonMatch() {
    console.log("won!", this.player, this.matchId);
    if (this.player.id !== undefined && this.matchId !== undefined) {
      this.tournamentService.setWinner(this.matchId, this.player.id).subscribe((data) => {
        this.winner = true;
        this.winnerToggled.emit(true);
      });
    }
  }
}
