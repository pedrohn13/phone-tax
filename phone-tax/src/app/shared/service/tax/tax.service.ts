import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ServiceBaseService } from '../service-base.service';

@Injectable({
  providedIn: 'root'
})
export class TaxService extends ServiceBaseService  {

  private taxUrl = '/taxes';

  constructor(http: HttpClient) { super(http); }

  getTaxes(): Observable<any> {    
    return this.get(this.taxUrl);
  }

}
