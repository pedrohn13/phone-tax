import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-calculation-result-dialog',
  templateUrl: './calculation-result-dialog.component.html',
  styleUrls: ['./calculation-result-dialog.component.css']
})
export class CalculationResultDialogComponent implements OnInit {

  public result: any;
  public hasTax: boolean;

  constructor(
    public dialogRef: MatDialogRef<CalculationResultDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    console.log(data)
    this.result = data;

    this.hasTax = this.result.valueWithPlan !== '-' ;
  }

  ngOnInit(): void {
  }

}
