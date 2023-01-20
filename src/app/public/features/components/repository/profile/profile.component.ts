import { Component, Injectable, Input, OnInit } from '@angular/core';
import { GithubService } from 'src/app/api/github.service';
import { ActivatedRoute } from '@angular/router';
import { SearchProfile, SearchProfileDTO } from 'src/app/api/github.interface';


@Injectable()
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  querySearch: string = '';
  mockRepositoriesInfo: SearchProfile;
  constructor(
    private GithubService: GithubService,
    private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.queryParams.subscribe((data) => {
      this.querySearch = data['search'];
    });
  }
  ngOnInit(): void {
    this.GithubService.searchProfile(this.querySearch).then((data) => {
      this.mockRepositoriesInfo = data;
    });
  }

  goToUrl(): void {
    window.location.href =
      'https://github.com/' + this.mockRepositoriesInfo.login;
  }
}
