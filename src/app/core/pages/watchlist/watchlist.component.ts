import { Component } from '@angular/core';
import { Company } from './watchlist.constants';
import { WatchlistService } from './services/watchlist.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ChartConfiguration } from 'chart.js';

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.scss'],
})
export class WatchlistComponent {
  tableDataPEA: Company[] = [];
  tableDataCTO: Company[] = [];
  currentTableData: Company[] = [];
  isLoading = false;
  sortColumn: string = '';
  sortDirection: 'asc' | 'desc' = 'asc';
  chartOptions: ChartConfiguration<'line'>['options'] | undefined;

  constructor(private route: ActivatedRoute, private router: Router) {
    const companies = this.route.snapshot.data['companies'];
    if (companies) {
      this.tableDataPEA = companies.pea;
      this.tableDataCTO = companies.cto;
      this.currentTableData = this.tableDataPEA;
      this.chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          // tooltip: {
          //   callbacks: {
          //     title: (context: any) => {
          //       return (
          //         this.dates?.[context[0].dataIndex] ||
          //         `Point ${context[0].dataIndex}`
          //       );
          //     },
          //   },
          // },
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
    }
  }

  handleError(error: any) {
    console.error('Error fetching stock data:', error);
  }

  getPERatioColor(pe: number): string {
    return WatchlistService.getPERatioColor(pe);
  }

  getEPSColor(pe: number): string {
    return WatchlistService.getEPSColor(pe);
  }

  getDropFromHighColor(dropStr: string): string {
    return WatchlistService.getDropFromHighColor(dropStr);
  }

  getScoreColor(score: number): string {
    return WatchlistService.getScoreColor(score);
  }

  openCompanyDetails(company: Company) {
    const ticker = company.ticker;
    console.log(`Opening details for company: ${ticker}`);

    const url = `/company/${ticker}`;
    this.router.navigate([url]);
  }

  sortBy(column: string) {
    if (this.sortColumn === column) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortColumn = column;
      this.sortDirection = 'asc';
    }

    const direction = this.sortDirection === 'asc' ? 1 : -1;

    this.currentTableData.sort((a: any, b: any) => {
      const valA = WatchlistService.parseSortableValue(a[column]);
      const valB = WatchlistService.parseSortableValue(b[column]);

      if (valA < valB) return -1 * direction;
      if (valA > valB) return 1 * direction;
      return 0;
    });
  }
}
