import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NgxPlanetModule} from '@worktile/planet';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPlanetModule,
  ],
  providers: [
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
