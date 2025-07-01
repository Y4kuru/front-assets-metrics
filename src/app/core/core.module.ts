import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeModule } from './home/home.module';
import { WhyInvestModule } from './pages/why/why-invest/why-invest.module';
import { WhyModule } from './pages/why/why.module';
import { SupportChannelModule } from './pages/support-channel/support-channel.module';
import { WatchlistModule } from './pages/watchlist/watchlist.module';
import { CompanyDetailsModule } from './pages/company-details/company-details.module';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    HomeModule,
    WhyModule,
    SupportChannelModule,
    WatchlistModule,
    CompanyDetailsModule
  ],
  exports: [
  ]
})
export class CoreModule {}
