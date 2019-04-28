import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LibOneModule } from 'lib-one';
import { LibTwoModule } from 'lib-two';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LibOneModule,
    LibTwoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
