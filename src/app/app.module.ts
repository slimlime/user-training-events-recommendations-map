import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MasterEventsListPageComponent } from './pages/master-events-list-page/master-events-list-page.component';
import { MapViewPageComponent } from './pages/map-view-page/map-view-page.component';
import { EventDetailComponent } from './components/event-detail/event-detail.component';
import { EventListItemComponent } from './components/event-list-item/event-list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    MasterEventsListPageComponent,
    MapViewPageComponent,
    EventDetailComponent,
    EventListItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
