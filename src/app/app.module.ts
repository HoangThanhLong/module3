import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {AwesomeModule} from './awesome/awesome.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    AwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
