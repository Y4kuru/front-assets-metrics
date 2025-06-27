import 'zone.js/node';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideServerRendering } from '@angular/platform-server';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { serverRoutes } from './app/app.routes.server';

console.log('Bootstrapping Angular Server...');

export const bootstrap = () =>
  bootstrapApplication(AppComponent, {
    providers: [
      provideServerRendering(),
      provideRouter(serverRoutes),
    ],
  });
