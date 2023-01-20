import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent {
  formGroup: FormGroup;
  @Input() inputId = '';
  @Input() control = new FormControl();
  @Input() label = '';
  constructor() {
    this.formGroup = new FormGroup({
      inputvalue: new FormControl(),
    });
  }
}
