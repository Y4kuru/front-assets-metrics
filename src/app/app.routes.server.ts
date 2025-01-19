import { Route } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './core/home/home.component';

export const serverRoutes: Route[] = [
  {
    path: '**',
    component: AppComponent
  },
  {
    path: 'home',
    component: HomeComponent
  }
];
