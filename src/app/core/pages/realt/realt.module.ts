import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RealtComponent } from './realt.component';
import { SparklineModule } from '../../../shared/components/sparkline/sparkline.module';

@NgModule({
  declarations: [
    RealtComponent
  ],
  imports: [
    CommonModule,
    SparklineModule
  ]
})
export class RealtModule {}
