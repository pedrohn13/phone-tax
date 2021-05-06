import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculationResultDialogComponent } from './calculation-result-dialog.component';

describe('CalculationResultDialogComponent', () => {
  let component: CalculationResultDialogComponent;
  let fixture: ComponentFixture<CalculationResultDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculationResultDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculationResultDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
