import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeModule } from './home/home.module';
import { WhyInvestModule } from './pages/why/why-invest/why-invest.module';
import { WhyModule } from './pages/why/why.module';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    HomeModule,
    WhyModule,
    WhyInvestModule
  ],
  exports: [
  ]
})
export class CoreModule {}
