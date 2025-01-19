import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { PollModule } from '../../shared/components/poll/poll.module'; // Import PollModule
import { PollResultsModule } from '../../shared/components/poll-results/poll-results.module'; // Import PollResultsModule

@NgModule({
  declarations: [
    HomeComponent  // Declare HomeComponent
  ],
  imports: [
    CommonModule, // Import CommonModule for directives like ngIf, ngFor
    RouterModule, // Import RouterModule if you are using routing inside HomeComponent
    PollModule, // Import PollModule to use app-poll
    PollResultsModule // Import PollResultsModule to use app-poll-results
  ]
})
export class HomeModule {}
