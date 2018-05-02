//import { NavbarComponent } from './../../../src/navbars/navbar.component';
//import { NavbarService } from './../../../src/navbars/navbar.service';
//import { LogoComponent } from './../../../src/navbars/logo.component';
//import { LinksComponent } from './../../../src/navbars/links.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
//import { MDBBootstrapModule } from '../../../src';

import { FormsModule } from "@angular/forms";
import { AgmCoreModule } from '@agm/core';
import { ResaltarDirective } from "./directives/resaltar.directive";
import { ContarClicksDirective } from "./directives/contar-clicks.directive";

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
    RouterModule.forRoot([])
//    ,MDBBootstrapModule.forRoot()
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
//  ,providers: [NavbarService],
  bootstrap: [AppComponent]
//  ,exports: [ NavbarComponent, LinksComponent, LogoComponent],
})
export class AppModule {
}
