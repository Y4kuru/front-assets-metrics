import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CompanyDetails } from './company-details.constants';
import { ChartConfiguration } from 'chart.js';

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.scss']
})
export class CompanyDetailsComponent {
  company: CompanyDetails | undefined;
  chartOptions: ChartConfiguration<'line'>['options'] | undefined;

  constructor(private route: ActivatedRoute) {
    this.route.data.subscribe((data) => {
      this.company = data['company'];
      console.log('Company data:', this.company);
      this.chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
        },
        scales: {
          x: { display: false },
          y: { display: false },
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
    });
  }

  formatPrice(price: string | number, currency: string = 'USD'): string {
    const num = Number(price);
    if (isNaN(num)) return '-';
    return new Intl.NumberFormat('fr-FR', {
      style: 'currency',
      currency: currency || 'USD'
    }).format(num);
  }

  formatMarketCap(value: string): string {
    const num = Number(value);
    if (isNaN(num)) return '-';
    if (num >= 1_000_000_000_000) return (num / 1_000_000_000_000).toFixed(2) + ' T';
    if (num >= 1_000_000_000) return (num / 1_000_000_000).toFixed(2) + ' B';
    if (num >= 1_000_000) return (num / 1_000_000).toFixed(2) + ' M';
    return num.toString();
  }
}
