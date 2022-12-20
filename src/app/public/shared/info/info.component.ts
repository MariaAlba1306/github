import { Component } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css'],
})
export class InfoComponent {
  mockRepostoriesInfo = {
    public_repos: 0,
    public_gists: 0,
    followers: 0,
    following: 0,
  };
}
