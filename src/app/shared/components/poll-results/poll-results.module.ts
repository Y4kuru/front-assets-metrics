import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PollResultsComponent } from './poll-results.component';
import { FormsModule } from '@angular/forms';  // For ngModel binding
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    PollResultsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
    
  ],
  exports: [
    PollResultsComponent
  ]
})
export class PollResultsModule {}
