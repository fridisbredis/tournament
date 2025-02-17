import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { member } from '../models/member';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'http://localhost:5215/api'; // Backend-URL

  constructor(private http: HttpClient) { }

  getMembers(): Observable<any> {
    const headers = { Authorization: `Bearer ${localStorage.getItem('token')}` };
    return this.http.get(`${this.baseUrl}/members`, { headers }); // GET /api/data
  }

  addMember(member: member): Observable<any> {
    const headers = { Authorization: `Bearer ${localStorage.getItem('token')}` };
    return this.http.post(`${this.baseUrl}/members`, member, { headers }); // POST /api/data
  }

  getTournamentOrder(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/tournament`);
  }
}
