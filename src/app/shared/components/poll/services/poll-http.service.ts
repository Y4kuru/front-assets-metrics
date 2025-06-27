import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PollHttpService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  // Get the poll data
  getPollResults(pollId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${pollId}`);
  }

  // Submit a vote for a poll
  submitVote(pollId: string, vote: string): Observable<any> {
    return this.http.patch(`${this.apiUrl}/${pollId}`, { vote });
  }
}
