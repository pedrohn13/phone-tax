import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxCalculatorMobileComponent } from './tax-calculator-mobile.component';

describe('TaxCalculatorMobileComponent', () => {
  let component: TaxCalculatorMobileComponent;
  let fixture: ComponentFixture<TaxCalculatorMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaxCalculatorMobileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaxCalculatorMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
