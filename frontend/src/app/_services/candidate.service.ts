import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Candidate } from './../_models/candidate';

@Injectable({
  providedIn: 'root'
})
export class CandidateService {
  private apiUrl = 'http://localhost:8000/api/dados-pessoais/';

  constructor(private http: HttpClient) {}

  saveCandidate(candidate: Candidate): Observable<any> {
    return this.http.post(this.apiUrl, candidate);
  }
}
