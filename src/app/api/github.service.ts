import { JsonPipe } from '@angular/common';
import { Injectable, OnInit } from '@angular/core';

import {
  SearchProfile,
  SearchProfileDTO,
  SearchRepo,
  SearchRepoDTO,
} from './github.interface';

@Injectable({
  providedIn: 'root',
})
export class GithubService {
  noResults: boolean;
  inputValue: string;
  constructor() {}

  public async searchProfile(inputValue: string): Promise<SearchProfile> {
    const response = await this.getUserInfoHttp(inputValue);
    console.log(this.mapper(response));

    return this.mapper(response);
  }
  public async searchRepo(inputValue: string): Promise<SearchRepo[]> {
    const response = await this.getUserRepo(inputValue);
    const mappedResponse = response.map((repo) => {
      return this.mapperRepo(repo);
    });
    return mappedResponse;
  }
  private async getUserInfoHttp(inputValue: string): Promise<SearchProfileDTO> {
    const userUrl = `https://api.github.com/users/${inputValue}`;
    const response = await fetch(userUrl);
    const json: SearchProfileDTO = await response.json();
    const data = await Promise.all([fetch(userUrl)]);
    if (data[0].status === 404 || data[0].status === 403) {
      this.noResults = true;
    } else {
      this.noResults = false;
    }
    return json;
  }

  private async getUserRepo(inputValue: string): Promise<SearchRepoDTO[]> {
    const userUrl = `https://api.github.com/users/${inputValue}/repos`;
    const response = await fetch(userUrl);
    const data = await Promise.all([fetch(userUrl)]);
    const repoArray: SearchRepoDTO[] = await response.json();
    if (data[0].status === 404 || data[0].status === 403) {
      this.noResults = true;
    } else {
      this.noResults = false;
    }
    return repoArray;
  }

  private mapper(userInfo: SearchProfileDTO): SearchProfile {
    return {
      login: userInfo.login,
      location: userInfo.location,
      email: userInfo.email,
      avatar_url: userInfo.avatar_url,
      blog: userInfo.blog,
      created_at: userInfo.created_at,
      followers: userInfo.followers,
      public_gists: userInfo.public_gists,
      public_repos: userInfo.public_repos,
      following: userInfo.following,
    };
  }

  private mapperRepo(userRepo: SearchRepoDTO): SearchRepo {
    return {
      name: userRepo.name,
      description: userRepo.description,
      forks: userRepo.forks,
      watchers: userRepo.watchers,
      html_url: userRepo.html_url,
    };
  }
}
