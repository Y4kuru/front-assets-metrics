import { Component, Inject, PLATFORM_ID, AfterViewInit } from '@angular/core';
import { environment } from '../environments/environment';
import { isPlatformBrowser } from '@angular/common';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  isBrowser: boolean = false;
  apiUrl = environment.apiUrl;
  isCollapsed = false;
  isLoading = false;


  constructor(@Inject(PLATFORM_ID) private platformId: Object, private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.isLoading = true;
      } else if (
        event instanceof NavigationEnd ||
        event instanceof NavigationCancel ||
        event instanceof NavigationError
      ) {
        this.isLoading = false;
      }
    });
  }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.isBrowser = true;
    }
  }

  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed;
  }
}
