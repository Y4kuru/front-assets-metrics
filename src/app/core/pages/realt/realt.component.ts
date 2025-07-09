import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ChartConfiguration } from 'chart.js';

interface Realt {
  dates: string[];
  rents: number[];
}

@Component({
  selector: 'app-realt',
  templateUrl: './realt.component.html',
  styleUrls: ['./realt.component.scss'],
})
export class RealtComponent {
  realt: Realt | undefined;
  maxRent: number | undefined;
  chartOptions: ChartConfiguration<'line'>['options'] | undefined = undefined;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.realt = this.route.snapshot.data['realt'];
    if (this.realt) {
      this.maxRent = Math.ceil(Math.max(...this.realt.rents));
      this.chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: {
              title: (context) => {
                return (
                  this.realt?.dates?.[context[0].dataIndex] ||
                  `Point ${context[0].dataIndex}`
                );
              },
            },
          },
        },
        scales: {
          x: { display: true },
          y: { display: true, min: 0, max: this.maxRent },
        },
        elements: {
          line: {
            borderWidth: 2.5,
            tension: 0.3,
          },
          point: {
            radius: 0,
          },
        },
      };
    }
  }
}
