import { Injectable } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';
import { promises } from 'dns';

@Injectable({
  providedIn: 'root',
})
export class GithubService {
  searchProfileResults = null;
  searchRepoResults = null;
  noResults: boolean = false;

  constructor() {}
  // searchProfile(inputValue: string) {
  //   fetch('https://api.github.com/users/' + inputValue, {
  //     method: 'GET',
  //     headers: new Headers({
  //       'Content-Type': 'application/json',
  //       'Access-Control-Allow-Origin': '*',
  //     }),
  //   })
  //     .then((response) => response.json())
  //     .then((response) => {
  //       if (response == null) {
  //         alert('hi');
  //       }
  //       this.searchProfileResults = response;
  //       console.log(this.searchProfileResults);
  //     });
  //   fetch('https://api.github.com/users/' + inputValue + '/repos')
  //     .then((response) => response.json())
  //     .then((response) => {
  //       this.searchRepoResults = response;
  //       console.log(this.searchRepoResults);
  //     });
  // }
  async searchProfile(inputValue: string) {
    const userUrl = 'https://api.github.com/users/' + inputValue;
    const repoUrl = 'https://api.github.com/users/' + inputValue + '/repos';
    try {
      const data = await Promise.all([fetch(userUrl), fetch(repoUrl)]);
      if (data[0].status === 404) {
        this.noResults = true;
        return;
      }
      this.searchProfileResults = await data[0].json();
      this.searchRepoResults = await data[1].json();
      console.log(this.searchProfileResults);
      console.log(this.searchRepoResults);
    } catch (error) {
      console.log(error);
    }
  }

  // public getData(inputValue: string): Observable<any> {
  //   const url = `https://api.github.com/users/${inputValue}`;
  //   return this.http.get<any>(url)
  // }
}
