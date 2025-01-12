import { Route } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './shared/components/home/home.component';

export const routes: Route[] = [
  { path: '', component: AppComponent },
  { path: '**', component: AppComponent },
  { path: 'home', component: HomeComponent }
];
