import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { SDemoComponent } from './s-demo/s-demo.component';


@NgModule({
  declarations: [
    SDemoComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule
  ],exports:[
    SDemoComponent
  ]
})
export class StudentModule { }
