import { Injectable } from '@angular/core';
import { TournamentService } from '../services/tournament-service';
import { match } from '../models/match';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiService } from '../services/api.service';
import { player } from '../models/player';

@Injectable({
  providedIn: 'root',
})
export class MatchService {
  constructor(private apiService: ApiService) { }

  getWinner(match: match): Observable<player> {
    if (match.winnerId) {
      return this.apiService.getPlayerById(match.winnerId);
    } else {
      return new Observable<player>(observer => {
        observer.error('No winnerId found');
      });
    }
  }

  getPlayer(playerId: number): Observable<player> {
    if (!!playerId) {
      return this.apiService.getPlayerById(playerId);
    } else {
      return new Observable<player>(observer => {
        observer.error('No playerId provided');
      });
    }
  }

  getMatch(matchId: number): Observable<match> {
    return this.apiService.getMatchById(matchId);
  }
}
