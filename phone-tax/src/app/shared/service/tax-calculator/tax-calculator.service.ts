import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaxCalculatorService {

  private serverUrl = "http://localhost:3000"

  private taxCalculatorUrl = this.serverUrl + '/calculate-tax';

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient  
  ) { }
  
  calculateTax(callInfo: any): Observable<any> {    
    return this.http.post<any>(this.taxCalculatorUrl, callInfo, this.httpOptions);
  }
}
