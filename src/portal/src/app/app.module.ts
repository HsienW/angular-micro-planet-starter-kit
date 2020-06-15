import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NgxPlanetModule} from '@worktile/planet';

import {AppRootContext} from '../../../planet-controllers';

import {HomeComponent} from '../home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPlanetModule,
  ],
  providers: [
    AppRootContext
  ],
  bootstrap: [
    AppComponent
  ],
  entryComponents: [
    AppComponent
  ]
})
export class AppModule {
}
