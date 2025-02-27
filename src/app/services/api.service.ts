import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { player } from '../models/player';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'http://localhost:5215/api'; // Backend-URL

  constructor(private http: HttpClient) { }

  addPlayer(player: player): Observable<any> {
    const headers = { Authorization: `Bearer ${localStorage.getItem('token')}` };
    return this.http.post(`${this.baseUrl}/players`, player, { headers }); // POST /api/data
  }

  getTournamentOrder(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/tournament/tournament-order`);
  }

  setTournamentOrder(): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/tournament/set-tournament-order`, {});
  }

  getCurrentRoundMatches(round: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/tournament/current-round/${round}`);
  }

  getPlayerById(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/players/${id}`);
  }
}
