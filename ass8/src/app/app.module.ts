import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Que1Component } from './que1/que1.component';
import { Que2Component } from './que2/que2.component';

@NgModule({
  declarations: [
    AppComponent,
    Que1Component,
    Que2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
