import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {NgxPlanetModule} from '@worktile/planet';

import {routers} from './app1-root.routing';

import {App1RouterOutletComponent} from './app1-router-outlet.component';
import {App1DashboardComponent} from '../app1-dashboard/app1-dashboard.component';
import {App1RootComponent} from './app1-root.component';


@NgModule({
  declarations: [
    App1RouterOutletComponent,
    App1RootComponent,
    App1DashboardComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routers),
    NgxPlanetModule,
  ],
  providers: [
  ],
  entryComponents: [],
  bootstrap: [App1RouterOutletComponent]
})
export class App1RootModule {}
