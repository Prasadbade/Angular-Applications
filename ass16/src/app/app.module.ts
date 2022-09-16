import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CapitalComponent } from './capital/capital.component';
import { PasswordComponent } from './password/password.component';
import { AdditionComponent } from './addition/addition.component';
import { MyAddPipe } from './my-add.pipe';
import { MyMultiPipe } from './my-multi.pipe';
import { MarvellousChkPipe } from './marvellous-chk.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CapitalComponent,
    PasswordComponent,
    AdditionComponent,
    MyAddPipe,
    MyMultiPipe,
    MarvellousChkPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
