import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PollResultsComponent } from './poll-results.component';
import { FormsModule } from '@angular/forms';  // For ngModel binding
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    PollResultsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    MatCardModule
  ],
  exports: [
    PollResultsComponent
  ]
})
export class PollResultsModule {}
