import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GithubService {
  searchProfileResults = null;

  constructor() {}
  searchProfile(inputValue: string) {
    fetch('https://api.github.com/users/' + inputValue)
      .then((response) => response.json())
      .then((response) => {
        this.searchProfileResults = response;
          console.log(this.searchProfileResults);
      });
      
    
  }
  // public getData(inputValue: string): Observable<any> {
  //   const url = `https://api.github.com/users/${inputValue}`;
  //   return this.http.get<any>(url)
  // }
}
