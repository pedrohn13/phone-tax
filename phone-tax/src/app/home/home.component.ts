import { Component, OnInit } from '@angular/core';
import { ApplicationStateService } from '../shared/service/application-state/application-state.service';
import { PlanService } from '../shared/service/plan/plan.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public isMobileResolution: boolean;
  public plans: any[];

  constructor(
    private applicationStateService: ApplicationStateService,
    private planService: PlanService) {
    this.isMobileResolution = this.applicationStateService.getIsMobileResolution();
  }

  ngOnInit(): void {
    this.loadPlans();
  }

  loadPlans() {
    this.planService.getPlans()
      .subscribe(
        data => this.plans = data,
        error => console.log(error)
      );
  }

}
