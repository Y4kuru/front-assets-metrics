import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './core/home/home.component';
import { AboutComponent } from './shared/components/about/about.component';

export const routes: Routes = [
  { path: '', component: HomeComponent }, // Default route (home page)
  { path: 'home', component: HomeComponent }, // Home route
  { path: 'about', component: AboutComponent }, // About route
  { path: '**', redirectTo: '' }, // Catch-all for unknown routes, redirect to home
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
