// master.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MasterRoutingModule } from './master-routing.module';
import { MasterComponent } from './master.component';

@NgModule({
  imports: [
    CommonModule,
    MasterRoutingModule,
    MasterComponent // ✅ import standalone component
  ]
})
export class MasterModule {}
