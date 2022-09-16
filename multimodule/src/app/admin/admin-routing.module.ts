import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ADemoComponent } from './a-demo/a-demo.component';

const routes: Routes = [
  {path:'',component:ADemoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
