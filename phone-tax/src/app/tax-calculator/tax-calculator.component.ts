import { Component, OnInit } from '@angular/core';
import { ApplicationStateService } from '../service/application-state/application-state.service';
import { TaxCalculatorService } from '../service/tax-calculator/tax-calculator.service';

@Component({
  selector: 'app-tax-calculator',
  templateUrl: './tax-calculator.component.html',
  styleUrls: ['./tax-calculator.component.css']
})
export class TaxCalculatorComponent implements OnInit {

  public isMobileResolution: boolean;

  constructor(
    private applicationStateService: ApplicationStateService,
    private calculateTaxService: TaxCalculatorService) {
    this.isMobileResolution = this.applicationStateService.getIsMobileResolution();
    this.calculate();
  }

  ngOnInit(): void {
  }

  calculate(): void {
    this.calculateTaxService.calculateTax({originCode: "018", destinationCode: "017", callDuration: 100, plan: "Fale Mais 30"})
    .subscribe(
       data => console.log(data),
       error => console.log(error),
       () => console.log("acesso a webapi get ok...")
    );
  }

}
