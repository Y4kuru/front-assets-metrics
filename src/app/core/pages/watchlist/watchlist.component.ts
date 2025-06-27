import { Component } from '@angular/core';
import { Company } from './watchlist.constants';
import { WatchlistService } from './services/watchlist.service';
import { ActivatedRoute } from '@angular/router';

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

  constructor(private route: ActivatedRoute) {
    const companies = this.route.snapshot.data['companies'];
    if (companies) {
      this.tableDataPEA = companies.pea;
      this.tableDataCTO = companies.cto;
      this.currentTableData = this.tableDataPEA;
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
