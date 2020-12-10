import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {NgxPlanetModule, PlanetComponentLoader, GlobalEventDispatcher} from '@worktile/planet';

import {routers} from './app2-root.routing';

import {App2RouterOutletComponent} from '../app2-router-outlet/app2-router-outlet.component';
import {App2DashboardComponent} from '../app2-dashboard/app2-dashboard.component';
import {App2RootComponent} from './app2-root.component';

// import {App2DashboardService} from '../app2-dashboard/app2-dashboard.service';


@NgModule({
  declarations: [
    App2RouterOutletComponent,
    App2RootComponent,
    // App2DashboardComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routers),
    NgxPlanetModule,
  ],
  providers: [
    // App2DashboardService
  ],
  entryComponents: [],
  bootstrap: [App2RootComponent]
})
export class App2RootModule {
  constructor(
    private globalEventDispatcher: GlobalEventDispatcher,
    private planetComponentLoader: PlanetComponentLoader
  ) {
    this.globalEventDispatcher.register('app-dispatcher-demo')
      .subscribe((payload: string) => {
        alert('I am app2, payload value: ' + payload);
      });
    this.planetComponentLoader.register(
      [
        {
          name: 'app2-dashboard-component',
          component: App2DashboardComponent
        }
      ]
    );
  }
}
