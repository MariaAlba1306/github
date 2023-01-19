import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute, Route } from '@angular/router';
import { GithubService } from 'src/app/api/github.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  @Input() searchbox: string = '';
  inputValue: string = '';
  inputValuewithoutCommas: string = '';
  formGroup: FormGroup;
  constructor(
    private router: Router,
    private GithubService: GithubService
  ) {
    this.formGroup = new FormGroup({
      inputvalue: new FormControl(),
    });
  }

  keyDownFunction(event: { keyCode: number }): void {
    if (event.keyCode === 13) {
      this.search();
    } else {
      document.getElementById('search')!.style.border = '0px solid red';
    }
  }
  get results(): boolean {
    return this.GithubService.noResults;
  }
  search(): void {
    this.inputValue = this.formGroup.value.inputvalue;
    if (!!this.inputValue) {
      document.getElementById('search')!.style.border = '0px solid red';
      this.router.navigate(['results'], {
        queryParams: { search: this.inputValue },
      });
      setTimeout(() => {
        document.location.reload();
      }, 10);
    } else {
      document.getElementById('search')!.style.border = '2px solid red';
    }
  }
}
