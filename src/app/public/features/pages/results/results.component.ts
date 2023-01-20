import { Component, OnInit } from '@angular/core';
import { GithubService } from 'src/app/api/github.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css'],
})
export class ResultsComponent implements OnInit {
  constructor(private GithubService: GithubService) {}
  get noResults(): boolean {
    return this.GithubService.noResults;
  }
  ngOnInit(): void {
    console.log(this.noResults)
  }
}
