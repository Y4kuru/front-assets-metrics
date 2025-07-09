import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RealtHttpService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  loadRealtRentsData(): Observable<any> {
    return this.http.get(`${this.apiUrl}/realt/rent`);
  }
}
