import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookComponent } from './book/book.component';
import { DefaultComponent } from './default/default.component';
import { TechnologyComponent } from './technology/technology.component';

const routes: Routes = [
  {path:'technologies',component:TechnologyComponent},
  {path:'books',component:BookComponent},
  {path:'',component:TechnologyComponent},
  {path: '**',component:DefaultComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


