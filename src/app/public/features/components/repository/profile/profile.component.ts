import { Component, OnInit } from '@angular/core';
import { GithubService } from 'src/app/api/github.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  constructor(
    public GithubService: GithubService,
    private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.queryParams.subscribe((data) => {
      this.querySearch = data['search'];
    });
  }
  querySearch: string = '';

  get results():boolean {
    return this.GithubService.noResults;
  }
  get mockRepostoriesInfo(): any {
    return this.GithubService.searchProfileResults;
  }
  goToUrl(): void {
    window.location.href =
      'https://github.com/' + this.mockRepostoriesInfo.login;
  }

  ngOnInit(): void {
    this.GithubService.searchProfile(this.querySearch);
  }
}
