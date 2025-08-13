// reports.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportsRoutingModule } from './reports-routing.module';
import { ReportsComponent } from './reports.component';

@NgModule({
  imports: [
    CommonModule,
    ReportsRoutingModule,
    ReportsComponent // ✅ imported instead of declared
  ]
})
export class ReportsModule {}
