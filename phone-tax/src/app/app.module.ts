import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FlexLayoutModule } from "@angular/flex-layout";
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HomeDesktopComponent } from './home/home-desktop/home-desktop.component';
import { HomeMobileComponent } from './home/home-mobile/home-mobile.component';
import { TaxCalculatorComponent } from './tax-calculator/tax-calculator.component';
import { TaxCalculatorDesktopComponent } from './tax-calculator/tax-calculator-desktop/tax-calculator-desktop.component';
import { TaxCalculatorMobileComponent } from './tax-calculator/tax-calculator-mobile/tax-calculator-mobile.component';
import { CalculationResultDialogComponent } from './dialog/calculation-result-dialog/calculation-result-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    TaxCalculatorComponent,
    TaxCalculatorDesktopComponent,
    TaxCalculatorMobileComponent,
    HomeComponent,
    HomeDesktopComponent,
    HomeMobileComponent,
    CalculationResultDialogComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    AppRoutingModule,
    FlexLayoutModule,
    MatCardModule,
    MatListModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatDialogModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
