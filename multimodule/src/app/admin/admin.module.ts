import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ADemoComponent } from './a-demo/a-demo.component';

@NgModule({
  declarations: [
    ADemoComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  exports:
  [
    ADemoComponent
  ]
})
export class AdminModule { }
