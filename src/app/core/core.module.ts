import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeModule } from './home/home.module';
import { WhyInvestModule } from './pages/why/why-invest/why-invest.module';
import { WhyModule } from './pages/why/why.module';
import { SupportChannelComponent } from './pages/support-channel/support-channel.component';
import { SupportChannelModule } from './pages/support-channel/support-channel.module';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    HomeModule,
    WhyModule,
    WhyInvestModule,
    SupportChannelModule
  ],
  exports: [
  ]
})
export class CoreModule {}
