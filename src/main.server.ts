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

//   import 'zone.js/node';
// import { enableProdMode } from '@angular/core';
// import { platformDynamicServer } from '@angular/platform-server';
// import { AppServerModule } from './app/app.server.module';
// import { environment } from './environments/environment';

// if (environment.production) {
//   enableProdMode();
// }

// export const bootstrap = () => platformDynamicServer().bootstrapModule(AppServerModule);
