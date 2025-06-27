import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { StockHttpService } from '../services/watchlist-http.service';

export const watchlistResolver: ResolveFn<{ cto: any[]; pea: any[] }> = () => {
  const stockHttpService = inject(StockHttpService);
  return stockHttpService.loadCompaniesData();
};
