import { Component, OnInit, OnDestroy } from '@angular/core';
import { match } from '../models/match';
import { TournamentService } from '../services/tournament-service';
import { CommonModule } from '@angular/common';
import { MatchComponent } from '../match/match.component';
import { Subscription } from 'rxjs';
import { TournamentTreeService } from './tournament-tree.service';

@Component({
  selector: 'app-tournament-tree',
  templateUrl: './tournament-tree.component.html',
  styleUrls: ['./tournament-tree.component.sass'],
  imports: [CommonModule, MatchComponent]
})
export class TournamentTreeComponent implements OnInit, OnDestroy {
  rounds: { [key: number]: match[] } = {};
  totalRoundsCount = 0;

  constructor(private tournamentTreeService: TournamentTreeService) { }
  private subscription: Subscription = new Subscription();

  ngOnInit(): void {
    this.getOrder();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  getOrder(): void {
    this.tournamentTreeService.getGroupedMatches().subscribe((data) => {
      this.rounds = data;
      console.log(data)
    });
  }

 
}
