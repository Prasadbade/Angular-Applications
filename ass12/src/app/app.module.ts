import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReversePipe } from './reverse.pipe';
import { Que2Component } from './que2/que2.component';
import { MyaddPipe } from './myadd.pipe';
import { MymultiPipe } from './mymulti.pipe';
import { Que3Pipe } from './que3.pipe';
import { Que3Component } from './que3/que3.component';

@NgModule({
  declarations: [
    AppComponent,
    ReversePipe,
    Que2Component,
    MyaddPipe,
    MymultiPipe,
    Que3Pipe,
    Que3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
