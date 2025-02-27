import { Injectable } from '@angular/core';
import { TournamentService } from '../services/tournament-service';
import { match } from '../models/match';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TournamentTreeService {
  constructor(private tournamentService: TournamentService) { }

  getGroupedMatches(): Observable<{ [key: number]: match[] }> {
    return this.tournamentService.getTournamentOrder().pipe(
      map(matches => this.groupMatchesByRound(matches))
    );
  }

  private groupMatchesByRound(matches: match[]): { [key: number]: match[] } {
    return matches.reduce((acc: { [key: number]: match[] }, match) => {
      if (match.round !== undefined && !acc[match.round]) {
        acc[match.round] = [];
      }
      if (match.round !== undefined) {
        acc[match.round].push(match);
      }
      return acc;
    }, {});
  }
}
