import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TaxCalculatorComponent } from './tax-calculator/tax-calculator.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [  
  { path: 'calculator', component: TaxCalculatorComponent },
  { path: 'home', component: HomeComponent },
  { path: '**',  redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
