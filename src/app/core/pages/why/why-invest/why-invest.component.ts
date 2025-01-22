import { Component } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { Reason, REASONS } from '../why.constants';

@Component({
  selector: 'app-why-invest',
  templateUrl: './why-invest.component.html',
  styleUrls: ['./why-invest.component.scss']
})
export class WhyInvestComponent {

  hasVoted = false;
  reasons: Reason[] = REASONS;

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        console.log('Navigation started', event);
      }
      if (event instanceof NavigationEnd) {
        console.log('Navigation ended', event);
      }
    });
  }

  onAnwserClicked(answer: string) {
    this.hasVoted = true;
    console.log('Answer clicked:', answer);
  }
}
