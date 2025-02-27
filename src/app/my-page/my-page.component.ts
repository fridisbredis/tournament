import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { player } from '../models/player';

@Component({
  selector: 'app-my-page',
  imports: [],
  templateUrl: './my-page.component.html',
  styleUrl: './my-page.component.sass'
})
export class MyPageComponent {

  constructor(private apiService: ApiService) { }
  message: string = '';

  setOrder() {
    this.apiService.setTournamentOrder().subscribe(response => {
      this.message = "Tournament order set " + response.message;
    });
  }

}
