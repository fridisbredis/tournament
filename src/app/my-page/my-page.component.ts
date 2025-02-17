import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { member } from '../models/member';

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
    const member = {
      name: 'John Doe',
      email: 'john@doe'
    } as member

    this.apiService.addMember(member).subscribe(response => {
      console.log('Member added');
    });
  }

}
