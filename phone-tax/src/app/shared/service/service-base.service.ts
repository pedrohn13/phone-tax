import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceBaseService {
  
  protected serverUrl = "http://localhost:3000"
  
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  protected getRequestURL(endpointUrl: string) {
    return this.serverUrl + endpointUrl;
  }

  protected get(endpoint: string): Observable<any> {
    return this.http.get<any>(this.serverUrl + endpoint, this.httpOptions);
  }

  protected post(endpoint: string,callInfo: any): Observable<any> {    
    return this.http.post<any>(this.serverUrl + endpoint, callInfo, this.httpOptions);
  }
}
