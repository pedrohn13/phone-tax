import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { TaxCalculatorComponent } from './tax-calculator/tax-calculator.component';
import { TaxCalculatorDesktopComponent } from './tax-calculator/tax-calculator-desktop/tax-calculator-desktop.component';
import { TaxCalculatorMobileComponent } from './tax-calculator/tax-calculator-mobile/tax-calculator-mobile.component';
import { TaxCalculatorService } from './service/tax-calculator/tax-calculator.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    TaxCalculatorComponent,
    TaxCalculatorDesktopComponent,
    TaxCalculatorMobileComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    AppRoutingModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
