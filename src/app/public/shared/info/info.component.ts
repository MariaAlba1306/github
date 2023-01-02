import { Component } from '@angular/core';
import { GithubService } from 'src/app/api/github.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css'],
})
export class InfoComponent {

  constructor(
    public GithubService: GithubService,
    private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.queryParams.subscribe((data) => {
      this.querySearch = data['search'];
    });
  }
  querySearch: any;
  get mockRepostoriesInfo(): any {
    return this.GithubService.searchProfileResults;
  }
  ngOnInit(): void {
    this.GithubService.searchProfile(this.querySearch);
  }
}


