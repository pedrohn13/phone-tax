import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TaxCalculatorComponent } from './tax-calculator/tax-calculator.component';
import { TaxCalculatorDesktopComponent } from './tax-calculator/tax-calculator-desktop/tax-calculator-desktop.component';
import { TaxCalculatorMobileComponent } from './tax-calculator/tax-calculator-mobile/tax-calculator-mobile.component';
import { TaxCalculatorService } from './service/tax-calculator/tax-calculator.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    TaxCalculatorComponent,
    TaxCalculatorDesktopComponent,
    TaxCalculatorMobileComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
