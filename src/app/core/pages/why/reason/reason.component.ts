import { Component, Input } from '@angular/core';
import { Reason } from '../why.constants';

@Component({
  selector: 'app-reason',
  templateUrl: './reason.component.html',
  styleUrls: ['./reason.component.scss']
})
export class ReasonComponent {

  @Input() reason: Reason | undefined;

  constructor() {
    
  }
}
