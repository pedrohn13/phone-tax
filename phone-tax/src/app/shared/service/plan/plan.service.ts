import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ServiceBaseService } from '../service-base.service';

@Injectable({
  providedIn: 'root'
})
export class PlanService extends ServiceBaseService {  

  private plansUrl = '/plans';

  constructor(http: HttpClient) { super(http); }
  
  getPlans(): Observable<any> {    
    return this.get(this.plansUrl);
  }
}
