import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Lead } from './lead.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private leadUrl = 'https://localhost:7158/api/Leads';
  register: any;

  constructor(private http: HttpClient) {}

  validateUser(UserName: string, role: string, password: string): Observable<boolean> {
    // Validation logic here
    return of(true);
  }

  AddUsers(lead: Lead): Observable<Lead> {
    return this.http.post<Lead>(this.leadUrl, lead);
  }
}
