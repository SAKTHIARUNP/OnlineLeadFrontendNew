import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Lead } from '../class/Lead.model';


@Injectable({
  providedIn: 'root'
})
export class LeadeditService {
  editUrl:string="https://localhost:7158/api/Leads"

  constructor(private httpClient:HttpClient) { }
  getAllLeads():Observable<Lead[]>{
    return this.httpClient.get<Lead[]>(this.editUrl)
  }
}
