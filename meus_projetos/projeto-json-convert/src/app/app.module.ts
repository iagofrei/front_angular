import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JsonConvertModule } from './json-convert/json-convert.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    JsonConvertModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
