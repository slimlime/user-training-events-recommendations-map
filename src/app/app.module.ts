import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MasterEventsListPageComponent } from './pages/master-events-list-page/master-events-list-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MasterEventsListPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
