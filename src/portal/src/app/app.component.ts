import {Component, OnInit} from '@angular/core';
import {Planet, SwitchModes} from '@worktile/planet';
import {AppRootContext} from '../../../planet-controllers';
import {CustomSettingsService} from './custom-settings.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(
    public appRootContext: AppRootContext,
    private customSettingsService: CustomSettingsService,
    private planet: Planet
  ) {
  }

  ngOnInit() {
    this.planet.setOptions({
      switchMode: SwitchModes.coexist,
      errorHandler: error => {
        console.log(error);
      }
    });

    this.appRootContext.setName('set root context');

    this.planet.setPortalAppData({
      appRootContext: this.appRootContext
    });

    const settings = this.customSettingsService.get();

    this.planet.registerApps([
      {
        name: 'app1',
        hostParent: '#app-host-container',
        routerPathPrefix: '/app1',
        selector: 'app1-root-container',
        resourcePathPrefix: '/static/app1',
        preload: settings.app1.preload,
        switchMode: settings.app1.switchMode,
        loadSerial: true,
        scripts: [
          'main.js'
        ],
        styles: [
          // 'styles.css'
        ],
      },
      {
        name: 'app2',
        hostParent: '#app-host-container',
        routerPathPrefix: '/app2',
        selector: 'app2-root-container',
        resourcePathPrefix: '/static/app2',
        preload: settings.app2.preload,
        switchMode: settings.app2.switchMode,
        loadSerial: true,
        scripts: [
          'main.js'
        ],
        styles: [
          // 'styles.css'
        ],
      },
    ]);

    this.planet.start();
  }
}
