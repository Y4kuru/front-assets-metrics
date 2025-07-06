import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PollComponent } from './poll.component';
import { FormsModule } from '@angular/forms';  // For ngModel binding
import { PollHttpService } from './services/poll-http.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    PollComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [
    PollComponent
  ],
  providers: [PollHttpService]
})
export class PollModule {}
