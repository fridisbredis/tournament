import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class TournamentService {
  constructor(private apiService: ApiService) { }

  getTournamentOrder(): Observable<any> {
    return this.apiService.getTournamentOrder();
  }

  setTournamentOrder(): Observable<any> {
    return this.apiService.setTournamentOrder();
  }

  getCurrentRoundMatches(round: number): Observable<any> {
    return this.apiService.getCurrentRoundMatches(round);
  }

  setWinner(matchId: number, playerId: number): Observable<any> {
    return this.apiService.setWinner(matchId, playerId);
  }
}
