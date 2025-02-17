import { Component, OnInit } from '@angular/core';
import { TournamentService } from '../services/tournament-service';
import { match } from '../models/match';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tournament',
  templateUrl: './tournament.component.html',
  styleUrls: ['./tournament.component.css'],
  imports: [CommonModule]
})
export class TournamentComponent implements OnInit {
  tournamentTree: match[] = [];

  constructor(private tournamentService: TournamentService) { }

  ngOnInit(): void {
    this.tournamentService.getTournamentTree().subscribe(tree => {
      this.tournamentTree = tree;
    });
  }
}
