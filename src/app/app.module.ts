import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FormsModule } from "@angular/forms";
import { AgmCoreModule } from '@agm/core';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBBKujuwqVevE9DUO6OhofIzrWInJq6NxY'
//      apiKey: 'AIzaSyBAMtnq2WPv7PYc00YZHHiruBs7l-Xd0xM'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
