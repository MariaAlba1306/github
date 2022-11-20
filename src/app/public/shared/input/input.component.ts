import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent implements OnInit {
  constructor() {}
  @Input() inputId = '';
  @Input() control = new FormControl();
  @Input() label = '';

  ngOnInit(): void {}

  formGroup = new FormGroup({
    inputvalue: new FormControl(),
  });
}
