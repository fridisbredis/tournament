import { Component, Input } from '@angular/core';
import { match } from '../models/match';
import { player } from '../models/player';
import { ApiService } from '../services/api.service';
import { PlayerComponent } from '../player/player.component';
import { CommonModule } from '@angular/common';
import { MatchService } from './match.service';

@Component({
  selector: 'app-match',
  imports: [CommonModule, PlayerComponent],
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.sass']
})
export class MatchComponent {
  @Input()
  match: match = {} as match;

  player1: player = {} as player;
  player2: player = {} as player;

  constructor(private matchService: MatchService) {
  }

  ngOnInit() {
    // hämta spelarna per match
    console.log("get players for match", this.match);
    if (this.match.decided) {
      this.getWinner()
    } else {
      this.getPlayers();
    }
  }

  getWinner() {
    if (this.match.winnerId) {
      this.matchService.getPlayer(this.match.winnerId).subscribe((data) => {
        this.player1 = data;
      });
    }
  }

  getPlayers() {
    if (this.match.player1Id) {
      this.matchService.getPlayer(this.match.player1Id).subscribe((data) => {
        this.player1 = data;
      });
    }
    if (this.match.player2Id) {
      this.matchService.getPlayer(this.match.player2Id).subscribe((data) => {
        this.player2 = data;
      });
    }
  }
}
