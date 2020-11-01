import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalesRoutingModule } from './sales-routing.module';
import { SalesComponent } from './components/sales/sales.component';
import { HighchartsChartModule } from 'highcharts-angular';

@NgModule({
  declarations: [SalesComponent],
  imports: [
    CommonModule,
    SalesRoutingModule,
    HighchartsChartModule
  ],
  exports: [
    SalesComponent
  ]
})
export class SalesModule { }
