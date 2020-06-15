import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {NgxPlanetModule} from '@worktile/planet';

import {routers} from './app2-root.routing';

import {App2RouterOutletComponent} from './app2-router-outlet.component';
import {App2DashboardComponent} from '../app2-dashboard/app2-dashboard.component';
import {App2RootComponent} from './app2-root.component';


@NgModule({
  declarations: [
    App2RouterOutletComponent,
    App2RootComponent,
    App2DashboardComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routers),
    NgxPlanetModule,
  ],
  providers: [
  ],
  entryComponents: [],
  bootstrap: [App2RouterOutletComponent]
})
export class App2RootModule {}
