import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EventDetailComponent } from './components/event-detail/event-detail.component';
import { MapViewPageComponent } from './pages/map-view-page/map-view-page.component';
import { MasterEventsListPageComponent } from './pages/master-events-list-page/master-events-list-page.component';


const routes: Routes = [
  // Default redirect to MasterEventsListPage
  {
    path: '',
    redirectTo: '/events',
    pathMatch: 'full'
  },
  {
    path: 'events',
    component: MasterEventsListPageComponent
  },
  {
    path: 'events/details/:id',
    component: EventDetailComponent
  },
  {
    path: 'events/map',
    component: MapViewPageComponent
  }

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
