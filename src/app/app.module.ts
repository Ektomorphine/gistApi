import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule }     from '@angular/http';

import { AppComponent } from './app.component';
import { HttpService } from './services/service.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
