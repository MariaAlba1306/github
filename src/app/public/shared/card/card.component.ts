import { Component, OnInit } from '@angular/core';
import { GithubService } from 'src/app/api/github.service';
import { ActivatedRoute } from '@angular/router';
import { SearchRepo } from 'src/app/api/github.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  constructor(
    private GithubService: GithubService,
    private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.queryParams.subscribe((data) => {
      this.querySearch = data['search'];
    });
  }
  querySearch: string = '';
  mockRepositoriesRepo: SearchRepo[] = [
    {
      name: '',
      description: '',
      forks: 0,
      watchers: 0,
      html_url: '',
    },
  ];

  ngOnInit(): void {
    this.GithubService.searchRepo(this.querySearch).then((data) => {
      this.mockRepositoriesRepo = data;
    });
  }
}
