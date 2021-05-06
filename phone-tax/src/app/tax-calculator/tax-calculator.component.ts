import { Component, OnInit } from '@angular/core';
import { ApplicationStateService } from '../shared/service/application-state/application-state.service';
import { PlanService } from '../shared/service/plan/plan.service';
import { TaxCalculatorService } from '../shared/service/tax/tax-calculator.service';
import { TaxService } from '../shared/service/tax/tax.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { CalculationResultDialogComponent } from '../dialog/calculation-result-dialog/calculation-result-dialog.component';

@Component({
  selector: 'app-tax-calculator',
  templateUrl: './tax-calculator.component.html',
  styleUrls: ['./tax-calculator.component.css']
})
export class TaxCalculatorComponent implements OnInit {

  public calculation: FormGroup;

  public isMobileResolution: boolean;
  public plans: any[];
  public taxes: any[];

  public selectedPlan: FormControl;
  public callDuration: FormControl;
  public codeOrigin: FormControl;
  public codeDestination: FormControl;

  constructor(
    private fb: FormBuilder,
    public dialog: MatDialog,
    private applicationStateService: ApplicationStateService,
    private calculateTaxService: TaxCalculatorService,
    private planService: PlanService,
    private taxService: TaxService) {

    this.createFormGroup(fb);



    this.isMobileResolution = this.applicationStateService.getIsMobileResolution();
    this.loadTaxes();
    this.loadPlans();
  }

  ngOnInit(): void {
  }

  createFormGroup(fb: FormBuilder) {
    this.selectedPlan = new FormControl('', Validators.required);
    this.callDuration = new FormControl('', [Validators.min(0), Validators.required]);
    this.codeOrigin = new FormControl('', Validators.required);
    this.codeDestination = new FormControl('', Validators.required);

    this.calculation = fb.group({
      selectedPlan: this.selectedPlan,
      callDuration: this.callDuration,
      codeOrigin: this.codeOrigin,
      codeDestination: this.codeDestination
    });
  }

  calculate(): void {
    if (this.calculation.valid) {
      const calculationRequest = this.generateCalculationRequest();
      this.calculateTaxService.calculateTax(calculationRequest)
        .subscribe(
          data => this.openDialog(data),
          error => console.log(error)
        );
    }
  }

  loadTaxes() {
    this.taxService.getTaxes()
      .subscribe(
        data => this.taxes = data,
        error => console.log(error)
      );
  }

  loadPlans() {
    this.planService.getPlans()
      .subscribe(
        data => this.plans = data,
        error => console.log(error)
      );
  }

  private generateCalculationRequest() {
    return {
      originCode: this.codeOrigin.value,
      destinationCode: this.codeDestination.value,
      callDuration: this.callDuration.value,
      plan: this.selectedPlan.value
    };
  }

  private openDialog(calculationResult): void {
    const dialogRef = this.dialog.open(CalculationResultDialogComponent, {
      width: '450px',
      data: calculationResult
    });    
  }

}
