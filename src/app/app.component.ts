import { Component, Inject, PLATFORM_ID, AfterViewInit } from '@angular/core';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  isBrowser: boolean = false;
  apiUrl = environment.apiUrl;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    console.log('Running in production mode:', environment.production);
    console.log('API URL:', this.apiUrl);
  }

  ngAfterViewInit() {
    console.log(this.platformId);
    if (this.platformId === 'browser') {
      this.isBrowser = true;
    }
  }
}
