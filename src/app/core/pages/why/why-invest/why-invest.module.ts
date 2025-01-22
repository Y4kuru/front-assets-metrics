import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WhyInvestComponent } from './why-invest.component';
import { ReasonComponent } from '../reason/reason.component';

@NgModule({
  declarations: [
    WhyInvestComponent,
    ReasonComponent
  ],
  imports: [
    CommonModule
  ]
})
export class WhyInvestModule {}
