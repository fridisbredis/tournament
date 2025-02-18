import { Component } from '@angular/core';
import { match } from '../models/match';
import { TournamentService } from '../services/tournament-service';
import { CommonModule } from '@angular/common';
import { MatchComponent } from "../match/match.component";

@Component({
  selector: 'app-tournament-tree',
  imports: [CommonModule, MatchComponent],
  templateUrl: './tournament-tree.component.html',
  styleUrl: './tournament-tree.component.sass'
})

export class TournamentTreeComponent {
  tournamentTree: match[] = [];

  constructor(private tournamentService: TournamentService) { }

  ngOnInit(): void {
    this.tournamentService.getTournamentTree().subscribe(tree => {
      console.log(tree);
      this.tournamentTree = tree;
    });
  }
}
