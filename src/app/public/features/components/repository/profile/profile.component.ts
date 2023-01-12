import { Component, Injectable, Input, OnInit } from '@angular/core';
import { GithubService } from 'src/app/api/github.service';
import { ActivatedRoute } from '@angular/router';
import { stringify } from 'querystring';
import { SearchProfile, SearchProfileDTO } from 'src/app/api/github.interface';
import { userInfo } from 'os';
import { Observable } from 'rxjs';


@Injectable()
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
  mockRepostoriesInfo: SearchProfile = {
  login: '',
  location: '',
  email: '',
  avatar_url: '',
  blog: '',
  created_at: ''
  };

  get results(): boolean {
    return this.GithubService.noResults;
  }
  ejemplo = '';
  goToUrl(): void {
    window.location.href =
      'https://github.com/' + this.mockRepostoriesInfo.login;
    console.log(typeof this.mockRepostoriesInfo);
  }

  ngOnInit(): void {
   this.GithubService.searchProfile(this.querySearch).then((data) => {
      this.mockRepostoriesInfo = data;
    });
  }
}
