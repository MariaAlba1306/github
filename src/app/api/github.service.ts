import { Injectable, OnInit } from '@angular/core';

import { SearchProfile, SearchProfileDTO } from './github.interface';

@Injectable({
  providedIn: 'root',
})
export class GithubService {
 
  public async searchProfile(inputValue: string): Promise<SearchProfile> {
    const response = await this.getUserInfoHttp(inputValue);
    console.log(this.mapper(response));
    return this.mapper(response);
    
  }

  public async getUserInfoHttp(inputValue: string): Promise<SearchProfileDTO> {
    const userUrl = `https://api.github.com/users/${inputValue}`;
    const response = await fetch(userUrl);
    const json: SearchProfileDTO = await response.json();
    console.log(json);
    return json;
  }
  noResults = false;
  resultado = this.searchProfile

  public mapper(userInfo: SearchProfileDTO): SearchProfile {
    return {
      login: userInfo.login,
      location: userInfo.location,
      email: userInfo.email,
      avatar_url: userInfo.avatar_url,
      blog: userInfo.blog,
      created_at: userInfo.created_at,
    };
  }
}
