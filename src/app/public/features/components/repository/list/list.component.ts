import { Component } from '@angular/core';
import { GithubService } from 'src/app/api/github.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  constructor(public GithubService: GithubService){};
  get results(): any {
    return this.GithubService.noResults 
  }
}

