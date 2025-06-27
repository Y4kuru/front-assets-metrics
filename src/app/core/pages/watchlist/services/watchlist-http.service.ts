import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class StockHttpService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  // Get the poll data
  getStockData(ticker: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/stock/${ticker}`);
  }

  getCompaniesDataPEA(): Observable<any> {
    return this.http.get(`${this.apiUrl}/companies-pea`);
  }

  getCompaniesDataCTO(): Observable<any> {
    return this.http.get(`${this.apiUrl}/companies-cto`);
  }

  loadCompaniesData(): Observable<any> {
    return this.http.post(`${this.apiUrl}/load_companies`, {});
  }
}
