import { Component } from '@angular/core';
import { GithubService } from 'src/app/api/github.service';
import { ActivatedRoute } from '@angular/router';
import { SearchProfile } from 'src/app/api/github.interface';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css'],
})
export class InfoComponent {
  constructor(
    private GithubService: GithubService,
    private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.queryParams.subscribe((data) => {
      this.querySearch = data['search'];
    });
  }
  querySearch: string = '';
  mockRepositoriesInfo: SearchProfile = {
    login: '',
    location: '',
    email: '',
    avatar_url: '',
    blog: '',
    created_at: '',
    followers: 0,
    following: 0,
    public_gists: 0,
    public_repos: 0,
  };
  ngOnInit(): void {
    this.GithubService.searchProfile(this.querySearch).then((data) => {
      this.mockRepositoriesInfo = data;
    });
  }
}
