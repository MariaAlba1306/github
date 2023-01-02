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
  querySearch: any;
  // mockRepostoriesInfo = {
  //   login: '',
  //   location: '',
  //   email: '',
  //   blog: '',
  //   created_at: '',
  //   avatar_url:
  //     'https://www.saramusico.com/wp-content/uploads/2019/04/foto-de-perfil-en-linkedin.jpg',
  //   html_url: '',
  // };

  get mockRepostoriesInfo(): any {
    return this.GithubService.searchProfileResults;
  }
  goToUrl(): any {
    window.location.href =
      'https://github.com/' + this.mockRepostoriesInfo.login;
  }

  ngOnInit(): void {
    this.GithubService.searchProfile(this.querySearch);
  }
}
