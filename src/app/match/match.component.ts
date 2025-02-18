import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ApiService } from '../services/api.service';
import { PlayerComponent } from '../player/player.component';
import { player } from '../models/player';
import { match } from '../models/match';

@Component({
  selector: 'app-match',
  imports: [CommonModule, PlayerComponent],
  templateUrl: './match.component.html',
  styleUrl: './match.component.sass'
})
export class MatchComponent {
  @Input()
  match: match = {} as match;

  constructor(private apiService: ApiService) { }

  ngOnInit() {

  }
}
