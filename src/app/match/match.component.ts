import { Component, EventEmitter, Input, Output } from '@angular/core';
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

  @Output()
  winnerToggled = new EventEmitter<boolean>();

  player1: player = {} as player;
  player2: player = {} as player;
  winner: player = {} as player;

  constructor(private matchService: MatchService) {
  }

  ngOnInit() {
    this.getPlayers();
    this.getWinner();

  }

  ngAfterViewInit() {
    console.log(this.match)
  }

  getWinner() {
    if (this.match.winnerId) {
      this.matchService.getPlayer(this.match.winnerId).subscribe((data) => {
        this.winner = data;
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

  toggleWinner() {
    this.winnerToggled.emit(true);
  }
}
