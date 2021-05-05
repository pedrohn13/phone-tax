import { Component, OnInit } from '@angular/core';
import { ApplicationStateService } from 'src/app/shared/service/application-state/application-state.service';
import { PlanService } from 'src/app/shared/service/plan/plan.service';
import { HomeComponent } from '../home.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-desktop',
  templateUrl: './home-desktop.component.html',
  styleUrls: ['./home-desktop.component.css']
})
export class HomeDesktopComponent extends HomeComponent implements OnInit {

  public selectedPlan: any;

  constructor(
    applicationStateService: ApplicationStateService,
    planService: PlanService,
    private router: Router
  ) { super(applicationStateService, planService) }

  ngOnInit(): void {
    super.ngOnInit();    
  }

  onSelection(event, element) {
    this.selectedPlan = element;
  }

  onClickCalculate() {
    this.router.navigate(['/calculator']);
  }
}
