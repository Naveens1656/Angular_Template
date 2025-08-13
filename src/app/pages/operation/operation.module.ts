import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { OperationComponent } from './operation.component'; // standalone component

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    OperationComponent // ✅ import instead of declare
  ]
})
export class OperationModule {}
