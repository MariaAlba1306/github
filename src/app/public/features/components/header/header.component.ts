import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  @Input() searchbox: any = '';

  inputvalue: any;

  constructor() {
    this.formGroup.valueChanges.subscribe((val) => console.log(val));
  }

  formGroup = new FormGroup({
    inputvalue: new FormControl(),
  });
}
