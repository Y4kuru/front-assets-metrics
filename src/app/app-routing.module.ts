import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './core/home/home.component';
import { AboutComponent } from './shared/components/about/about.component';
import { WhyComponent } from './core/pages/why/why.component';
import { WhyInvestComponent } from './core/pages/why/why-invest/why-invest.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  {
    path: 'pourquoi', component: WhyComponent,
    children: [
      { path: 'investir', component: WhyInvestComponent }
    ]
  },
  { path: 'about', component: AboutComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
