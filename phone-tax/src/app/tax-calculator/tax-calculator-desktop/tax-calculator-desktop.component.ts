import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ApplicationStateService } from 'src/app/shared/service/application-state/application-state.service';
import { PlanService } from 'src/app/shared/service/plan/plan.service';
import { TaxCalculatorService } from 'src/app/shared/service/tax/tax-calculator.service';
import { TaxService } from 'src/app/shared/service/tax/tax.service';
import { TaxCalculatorComponent } from '../tax-calculator.component';

@Component({
  selector: 'app-tax-calculator-desktop',
  templateUrl: './tax-calculator-desktop.component.html',
  styleUrls: ['./tax-calculator-desktop.component.css']
})
export class TaxCalculatorDesktopComponent extends TaxCalculatorComponent implements OnInit {

  constructor(
    fb: FormBuilder,
    applicationStateService: ApplicationStateService,
    calculateTaxService: TaxCalculatorService,
    planService: PlanService,
    taxService: TaxService
  ) {
    super(fb, applicationStateService, calculateTaxService, planService, taxService);
   }

  ngOnInit(): void {
    super.ngOnInit();
  }

}
