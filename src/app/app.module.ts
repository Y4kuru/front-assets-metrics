import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module'; // Routing module
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { SideBarModule } from './shared/components/sidebar/sidebar.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoaderModule } from './shared/components/loader/loader.module';
import { AffiliateLinksModule } from './core/pages/affiliate-links/affiliate-links.module';
import { EducationModule } from './core/pages/education/education.module';
import { RealtModule } from './core/pages/realt/realt.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SideBarModule,
    CoreModule,
    SharedModule,
    BrowserAnimationsModule,
    LoaderModule,
    AffiliateLinksModule,
    EducationModule,
    RealtModule
  ],
  providers: [],
  exports: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
