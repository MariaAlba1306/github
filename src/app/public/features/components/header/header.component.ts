import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute, Route } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  @Input() searchbox: string = '';

  inputValue: string = '';
  inputValuewithoutCommas: string = '';

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.formGroup.valueChanges.subscribe((val) => console.log(val));
  }

  keyDownFunction(event: any) {
    if (event.keyCode === 13) {
      this.search();
    } else {
      document.getElementById('search')!.style.border = '0px solid red';
    }
  }
  search() {
    this.inputValue = JSON.stringify(this.formGroup.value.inputvalue);
    this.inputValuewithoutCommas = this.inputValue.replace(/"/g, '');
    if (
      this.inputValuewithoutCommas == 'null' ||
      this.inputValuewithoutCommas == undefined ||
      this.inputValuewithoutCommas == null ||
      this.inputValuewithoutCommas == ''
    ) {
      document.getElementById('search')!.style.border = '2px solid red';
    } else {
      document.getElementById('search')!.style.border = '0px solid red';
      this.router.navigate(['results'], {
        queryParams: { search: this.inputValuewithoutCommas },
      });
    }
  }

  formGroup = new FormGroup({
    inputvalue: new FormControl(),
  });
}
