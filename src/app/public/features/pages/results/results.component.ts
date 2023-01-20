import { Component, OnInit } from '@angular/core';
import { GithubService } from 'src/app/api/github.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css'],
})
export class ResultsComponent {
  get noResults(): boolean {
    return this.GithubService.noResults;
  }
  constructor(private GithubService: GithubService) {}
}
