import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css'],
})
export class StatusComponent {
  @Input() title: string | undefined;
  @Input() version: 'forks' | 'watchers' | undefined;
  constructor(){}
}
