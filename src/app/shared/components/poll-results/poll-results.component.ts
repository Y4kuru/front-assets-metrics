import { Component, OnInit } from '@angular/core';
import { PollResultsService } from './services/poll-results.service';

@Component({
  selector: 'app-poll-results',
  templateUrl: './poll-results.component.html',
  styleUrls: ['./poll-results.component.scss'],
})
export class PollResultsComponent implements OnInit {
  pollResults: any = [];

  constructor(private pollResultsService: PollResultsService) {}

  ngOnInit() {
    this.pollResults = [
      {
        question: 'Which feature would you like to see next?',
        options: [
          { name: 'New Feature A', votes: 0 },
          { name: 'New Feature B', votes: 0 },
          { name: 'New Feature C', votes: 0 },
        ],
      },
    ];
    // this.pollResultsService.getPollResults('weekly-poll').subscribe((data: any) => {
    //   this.pollResults = data;
    // });
  }
}
