import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ServiceBaseService } from '../service-base.service';

@Injectable({
  providedIn: 'root'
})
export class TaxCalculatorService extends ServiceBaseService {  

  private taxCalculatorUrl = '/calculate-tax';

  constructor(http: HttpClient) { super(http); }
  
  calculateTax(callInfo: any): Observable<any> {    
    return this.post(this.taxCalculatorUrl, callInfo);
  }
}
