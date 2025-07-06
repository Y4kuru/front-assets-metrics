import { Component, Input } from '@angular/core';
import { ChartConfiguration } from 'chart.js';
import { Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-sparkline',
  templateUrl: './sparkline.component.html',
  styleUrls: ['./sparkline.component.scss'],
})
export class SparklineComponent {
  @Input() data: number[] = [];
  @Input() dates?: string[]; // optional dates input
  @Input() color: string = '#EFD499';

  isBrowser = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: [],
    datasets: [],
  };

  chartOptions: ChartConfiguration<'line'>['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          title: (context) => {
            return this.dates?.[context[0].dataIndex] || `Point ${context[0].dataIndex}`;
          }
        }
      }
    },
    scales: {
      x: { display: false },
      y: { display: false }
    },
    elements: {
      line: {
        borderWidth: 2.5,
        tension: 0.3
      },
      point: {
        radius: 0
      }
    }
  };

  ngOnChanges() {
    if (!this.isBrowser) return;

    const labels = this.dates && this.dates.length === this.data.length
      ? this.dates
      : this.data.map((_, i) => i.toString());

    this.lineChartData = {
      labels,
      datasets: [
        {
          data: this.data,
          backgroundColor: this.color
        }
      ]
    };
  }
}
