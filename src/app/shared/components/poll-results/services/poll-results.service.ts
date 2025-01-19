import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PollResultsService {
  private apiUrl = 'http://localhost:5000/api/polls';  // Flask API base URL

  constructor(private http: HttpClient) {}

  // Get the poll data
  getPollResults(pollId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${pollId}`);
  }
}
