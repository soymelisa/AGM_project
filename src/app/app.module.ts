import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FormsModule } from "@angular/forms";
import { AgmCoreModule } from '@agm/core';
import { ResaltarDirective } from "./directives/resaltar.directive";
import { ContarClicksDirective } from "./directives/contar-clicks.directive";

import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';


@NgModule({
  declarations: [
    AppComponent,
      ResaltarDirective,
        ContarClicksDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBBKujuwqVevE9DUO6OhofIzrWInJq6NxY'
//      apiKey: 'AIzaSyBAMtnq2WPv7PYc00YZHHiruBs7l-Xd0xM'
    }),
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
  ,schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
