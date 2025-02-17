import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class TournamentService {
  constructor(private apiService: ApiService) { }

  getTournamentTree(): Observable<any> {
    return this.apiService.getTournamentOrder();
  }
}
