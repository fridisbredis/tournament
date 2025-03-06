import { Component, OnInit, OnDestroy } from '@angular/core';
import { match } from '../models/match';
import { TournamentTreeService } from './tournament-tree.service';
import { CommonModule } from '@angular/common';
import { MatchComponent } from '../match/match.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tournament-tree',
  templateUrl: './tournament-tree.component.html',
  styleUrls: ['./tournament-tree.component.sass'],
  imports: [CommonModule, MatchComponent]
})
export class TournamentTreeComponent implements OnInit, OnDestroy {
  rounds: { [key: number]: match[] } = {};
  roundsArray: { round: number, matches: match[] }[] = [];
  totalRoundsCount = 0;
  private subscription: Subscription = new Subscription();

  constructor(private tournamentTreeService: TournamentTreeService) { }

  ngOnInit(): void {
    this.getOrder();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  getOrder(): void {
    this.subscription.add(
      this.tournamentTreeService.getGroupedMatches().subscribe((data) => {
        this.rounds = data;
        this.totalRoundsCount = Object.keys(data).length;
        this.roundsArray = Object.keys(this.rounds).map(key => ({ round: Number(key), matches: this.rounds[Number(key)] }));
        console.log(data);
      })
    );
  }

  reloadTree(): void {
    this.getOrder();
  }
}
