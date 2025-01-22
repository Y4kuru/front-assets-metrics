import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavigationEnd, NavigationStart, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-why',
  templateUrl: './why.component.html',
  styleUrls: ['./why.component.scss']
})
export class WhyComponent {

  hasVoted = false;

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
