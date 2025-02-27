import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { MyPageComponent } from './my-page/my-page.component';
import { TournamentTreeComponent } from './tournament-tree/tournament-tree.component';
import { CurrentRoundComponent } from "./current-round/current-round.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [CommonModule,
    RouterOutlet,
    MatTabsModule,
    MyPageComponent,
    TournamentTreeComponent,
    CurrentRoundComponent,
  ]
})
export class AppComponent { }

