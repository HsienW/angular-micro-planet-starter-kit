import {Component, OnInit} from '@angular/core';
import {Planet, SwitchModes} from '@worktile/planet';
// import {AppRootContext} from '../../../planet-controllers';
// import {CustomSettingsService} from './custom-settings.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private planet: Planet) {
  }

  ngOnInit() {
    this.planet.setOptions({
      switchMode: SwitchModes.coexist,
      errorHandler: error => {
        console.log(error);
      }
    });

    // this.appRootContext.setName('set root context');

    // this.planet.setPortalAppData({
    //   appRootContext: this.appRootContext
    // });

    // const settings = this.customSettingsService.get();

    this.planet.registerApps([
      {
        name: 'stb',
        hostParent: '#app-host-container',
        routerPathPrefix: '/avatar2/stb',
        selector: 'stb-root-container',
        resourcePathPrefix: '/static/stb',
        preload: true,
        // preload: settings.stb.preload,
        // switchMode: settings.stb.switchMode,
        loadSerial: true,
        scripts: [
          'main.js'
        ],
        styles: [
          // 'styles.css'
        ],
        manifest: '/static/stb/manifest.json',
        // extra: {
        //   name: 'stb',
        //   color: '#ffa415'
        // }
      }
    ]);

    this.planet.start();
  }
}
