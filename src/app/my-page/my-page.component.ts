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

  addMember() {
    console.log('Adding member');
    const player = {
      name: 'John Doe',
      email: 'john@doe'
    } as player

    this.apiService.addPlayer(player).subscribe(response => {
      console.log('Member added');
    });
  }

}
