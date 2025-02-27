import { Component } from '@angular/core';
import { TournamentService } from '../services/tournament-service';
import { match } from '../models/match';
import { MatchComponent } from '../match/match.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-current-round',
  imports: [CommonModule, MatchComponent],
  templateUrl: './current-round.component.html',
  styleUrl: './current-round.component.sass'
})
export class CurrentRoundComponent {
  constructor(private tournamentService: TournamentService) { }

  matches: match[] = [];

  ngOnInit() {
    this.tournamentService.getCurrentRoundMatches(1).subscribe((data) => {
      console.log(data);
      this.matches = data;
    });
  }
}
