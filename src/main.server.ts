import 'zone.js';  // Importing zone.js is crucial for SSR
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { serverRoutes } from './app/app.routes.server';

console.log(`Starting from main.server.ts ...`);

// Export the bootstrap function
export const bootstrap = () => bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(serverRoutes)  // Server-side routes
  ]
});
