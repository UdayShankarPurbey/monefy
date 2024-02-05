import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddincomeandexpenseComponent } from './addincomeandexpense/addincomeandexpense.component';
import { ChartComponent } from './chart/chart.component';
import { DashboardComponent } from './dashboard/dashboard.component';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    AddincomeandexpenseComponent,
    ChartComponent,
    DashboardComponent,
  ],
  exports: [
    AddincomeandexpenseComponent,
    ChartComponent,
    DashboardComponent,
  ]
})
export class UserModule { }
