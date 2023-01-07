

import { Component, OnInit } from '@angular/core';
import { GithubService } from 'src/app/api/github.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
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

  get mockRepostoriesRepo(): any {
    return this.GithubService.searchRepoResults;
  }

  ngOnInit(): void {

  }
}
