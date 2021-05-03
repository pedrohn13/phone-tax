import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxCalculatorDesktopComponent } from './tax-calculator-desktop.component';

describe('TaxCalculatorDesktopComponent', () => {
  let component: TaxCalculatorDesktopComponent;
  let fixture: ComponentFixture<TaxCalculatorDesktopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaxCalculatorDesktopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaxCalculatorDesktopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
