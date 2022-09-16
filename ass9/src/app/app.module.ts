import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Que1Component } from './que1/que1.component';
import { Que21Component } from './que21/que21.component';
import { Que22Component } from './que22/que22.component';

@NgModule({
  declarations: [
    AppComponent,
    Que1Component,
    Que21Component,
    Que22Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
