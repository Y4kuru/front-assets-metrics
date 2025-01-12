import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { AppModule } from './app.module';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    AppModule,       // Import the main AppModule
    ServerModule     // Add server-specific capabilities
  ],
  bootstrap: [AppComponent] // Bootstraps the root component
})
export class AppServerModule {}
