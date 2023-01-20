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
  querySearch: string ;
  mockRepositoriesInfo: SearchProfile ;
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
}
