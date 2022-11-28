import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute, Route } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  @Input() searchbox: string = '';
  inputValue: string | undefined;
  inputValuewithoutCommas: string = '';
  formGroup: any;
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
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
  search(): void {
    this.inputValue = this.formGroup.value.inputvalue;
    if (!!this.inputValue) {
      document.getElementById('search')!.style.border = '0px solid red';
      this.router.navigate(['results'], {
        queryParams: { search: this.inputValue },
      });
    } else {
      document.getElementById('search')!.style.border = '2px solid red';
    }
  }
}
