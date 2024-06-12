import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

export interface Lead {
  getAllLeads(): unknown;
  id: number;
  name: string;
  email: string;
  address: string;
  mobile: string;
  interestedProducts: string;
  accountNumber?: string;
}

@Injectable({
  providedIn: 'root'
})
export class LeadService {
  private leadUrl = 'https://localhost:7158/api/Leads';  // Update this with your API endpoint

  constructor(private http: HttpClient) {}
  
  getLead(id: number): Observable<Lead> {
    return this.http.get<Lead>(`${this.leadUrl}/${id}`);
  }

  saveLead(lead: Lead): Observable<Lead> {
    return this.http.post<Lead>(this.leadUrl, lead);
  }

  approveLead(id: number, accountNumber: string): Observable<any> {
    return this.http.post(`${this.leadUrl}/${id}/approve`, { accountNumber });
  }

  deleteLead(id: number): Observable<any> {
    return this.http.delete(`${this.leadUrl}/${id}`);
  }

  updateLead(lead: Lead): Observable<Lead> {
    return this.http.put<Lead>(`${this.leadUrl}/${lead.id}`, lead);
  }
}