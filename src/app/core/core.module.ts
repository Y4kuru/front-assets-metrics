import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PollModule } from '../shared/components/poll/poll.module'; // Import PollModule
import { PollResultsModule } from '../shared/components/poll-results/poll-results.module'; // Import PollResultsModule
import { HomeModule } from './home/home.module';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    HomeModule
  ],
  exports: [
  ]
})
export class CoreModule {}
