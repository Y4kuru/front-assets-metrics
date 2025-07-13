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
  @Input() height: number = 60;
  @Input() data: number[] = [];
  @Input() dates?: string[]; // optional dates input
  @Input() color: string = '#EFD499';
  @Input() legend: string | undefined; // optional legend input
  @Input() chartOptions: ChartConfiguration<'line'>['options'] = undefined;

  lineChartData: ChartConfiguration<'line'>['data'] | undefined = undefined;
  isBrowser = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnChanges() {
    if (!this.isBrowser) return;
    const labels =
      this.dates && this.dates.length === this.data.length
        ? this.dates
        : this.data.map((_, i) => i.toString());
    let dataset: any = {
      type: 'line', // <=== force line chart rendering
      data: this.data,
      backgroundColor: 'transparent',
      borderColor: this.color,
      borderWidth: 2,
      fill: false,
      tension: 0.3,
      pointRadius: 0,
    };
    if (this.legend) {
      dataset.label = this.legend;
    }
    this.lineChartData = {
      labels,
      datasets: [dataset],
    };
  }
}
