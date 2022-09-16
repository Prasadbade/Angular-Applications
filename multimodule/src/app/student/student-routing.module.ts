import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SDemoComponent} from './s-demo/s-demo.component';

const routes: Routes = [
  {path:'',component:SDemoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
