import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SupportChannelComponent } from './core/pages/support-channel/support-channel.component';
import { WatchlistComponent } from './core/pages/watchlist/watchlist.component';
import { watchlistResolver } from './core/pages/watchlist/resolver/watchlist-resolver.service';
import { CompanyDetailsComponent } from './core/pages/company-details/company-details.component';
import { CompanyDetailsResolver } from './core/pages/company-details/resolver/watchlist-resolver.service';

export const routes: Routes = [
  { path: '', component: WatchlistComponent, resolve: {
      companies: watchlistResolver
    }
  },
  // { path: 'home', component: HomeComponent },
  {
    path: 'watchlist',
    component: WatchlistComponent,
    resolve: {
      companies: watchlistResolver
    }
  },
  {
    path: 'company/:ticker',
    component: CompanyDetailsComponent,
    resolve: {
      company: CompanyDetailsResolver
    }
  },
  // { path: 'picker', component: PickerComponent },
  // {
  //   path: 'why', component: WhyComponent,
  //   children: [
  //     { path: 'investir', component: WhyInvestComponent }
  //   ]
  // },
  { path: 'soutenir', component: SupportChannelComponent },
  // { path: 'about', component: AboutComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
