import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {App2RootModule} from './app2-root/app2-root.module';
import {environment} from './environments/environment';
import {PlanetPortalApplication, defineApplication} from '@worktile/planet';
import {AppRootContext} from '../../planet-controllers';

if (environment.production) {
  enableProdMode();
}

defineApplication('app2', (portalApp: PlanetPortalApplication) => {
  return platformBrowserDynamic([
    {
      provide: PlanetPortalApplication,
      useValue: portalApp
    },
    {
      provide: AppRootContext,
      useValue: portalApp.data.appRootContext
    }
  ])
    .bootstrapModule(App2RootModule)
    .then(appModule => {
      return appModule;
    })
    .catch(error => {
      console.error(error);
      return null;
    });
});
