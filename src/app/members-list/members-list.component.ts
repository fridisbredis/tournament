import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { MemberComponent } from '../member/member.component';
import { member } from '../models/member';

@Component({
  selector: 'app-members-list',
  imports: [CommonModule, MemberComponent],
  templateUrl: './members-list.component.html',
  styleUrl: './members-list.component.sass'
})
export class MembersListComponent {
  members: member[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getMembers().subscribe(response => {
      this.members = response;
    });
  }
}
