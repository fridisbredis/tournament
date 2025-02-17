import { Component, Input } from '@angular/core';
import { member } from '../models/member';

@Component({
  selector: 'app-member',
  imports: [],
  templateUrl: './member.component.html',
  styleUrl: './member.component.sass'
})
export class MemberComponent {
  @Input() member: member = {} as member;
}
