import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { CardButtonComponent } from './card-button/card-button.component';

import { CardsModule } from './cards/cards.module';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CardButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CardsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
