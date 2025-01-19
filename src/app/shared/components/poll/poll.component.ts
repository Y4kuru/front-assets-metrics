import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PollService } from './services/poll.service';

@Component({
  selector: 'app-poll',
  templateUrl: './poll.component.html',
  styleUrls: ['./poll.component.scss']
})
export class PollComponent implements OnInit {
  pollId = 'weekly-poll';  // The ID of the poll you want to interact with
  pollData: any;
  @Output() onAnswerClick = new EventEmitter<string>();

  constructor(private pollService: PollService) {}

  ngOnInit(): void {
    this.loadPoll();
  }

  loadPoll() {
    this.pollData = {
      "weekly-poll": {
          "question": "Which feature would you like to see next?",
          "options": [
              {"name": "New Feature A", "votes": 0},
              {"name": "New Feature B", "votes": 0},
              {"name": "New Feature C", "votes": 0}
          ]
      }
  }
    // this.pollService.getPollResults(this.pollId).subscribe(
    //   data => {
    //     this.pollData = data;
    //   },
    //   error => {
    //     console.error('Error fetching poll data', error);
    //   }
    // );
  }

  submitVote(vote: string) {
    this.onAnswerClick.emit(vote);
    // this.pollService.submitVote(this.pollId, vote).subscribe(
    //   data => {
    //     this.pollData = data;  // Update the poll results after submitting the vote
    //   },
    //   error => {
    //     console.error('Error submitting vote', error);
    //   }
    // );
  }
}
