import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CompanyDetailsComponent } from './company-details.component';
import { CompanyDetailsHttpService } from './services/company-details-http.service';
import { SparklineModule } from '../../../shared/components/sparkline/sparkline.module';

@NgModule({
  declarations: [
    CompanyDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SparklineModule
  ],
  providers: [CompanyDetailsHttpService]
  
})
export class CompanyDetailsModule {}
