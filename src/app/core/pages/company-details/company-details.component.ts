import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CompanyDetails } from './company-details.constants';
import { ChartConfiguration } from 'chart.js';

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.scss'],
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
        interaction: {
          mode: 'index',
          intersect: false,
        },
        plugins: {
          tooltip: {
            mode: 'index',
            intersect: false,
            callbacks: {
              labelColor: (context) => {
                return {
                  borderColor: '#EFD499',
                  backgroundColor: '#EFD499',
                };
              },
            },
          },
        },
        scales: {
          x: {
            display: true,
            ticks: {
              maxRotation: 45, // Rotate labels to reduce overlap
              minRotation: 25, // Minimum angle for better readability
              autoSkip: true, // Auto-hide overlapping ticks
              maxTicksLimit: 12, // Limit number of ticks shown
            },
          },
          y: {
            display: true,
            beginAtZero: false,
          },
        },
        elements: {
          line: {
            tension: 0.3,
          },
          point: {
            radius: 0,
            hoverRadius: 5,
            hoverBackgroundColor: '#161d27',
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
      currency: currency || 'USD',
    }).format(num);
  }

  formatMarketCap(value: string): string {
    const num = Number(value);
    if (isNaN(num)) return '-';
    if (num >= 1_000_000_000_000)
      return (num / 1_000_000_000_000).toFixed(2) + ' T';
    if (num >= 1_000_000_000) return (num / 1_000_000_000).toFixed(2) + ' B';
    if (num >= 1_000_000) return (num / 1_000_000).toFixed(2) + ' M';
    return num.toString();
  }
}
