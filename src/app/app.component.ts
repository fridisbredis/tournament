import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { MyPageComponent } from './my-page/my-page.component';
import { MembersListComponent } from './members-list/members-list.component';
import { TournamentTreeComponent } from './tournament-tree/tournament-tree.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    MatTabsModule,
    MyPageComponent,
    MembersListComponent,
    TournamentTreeComponent]
})
export class AppComponent { }

