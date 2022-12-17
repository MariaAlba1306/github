import { Component } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css'],
})
export class InfoComponent {
  repos: number = 0;
  gists: number = 0;
  followers: number = 3240;
  following: number = 210;
}
