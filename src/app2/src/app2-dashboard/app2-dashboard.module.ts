import {FormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
// import {RouterModule} from '@angular/router';

import {App2DashboardComponent} from './app2-dashboard.component';

import {App2DashboardService} from './app2-dashboard.service';

@NgModule({
  declarations: [
    App2DashboardComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    // RouterModule.forChild([
    //   {
    //     path: '',
    //     component: App1DashboardComponent,
    //   }
    // ]),
  ],
  exports: [App2DashboardComponent],
  providers: [App2DashboardService]
})
export class App2DashboardModule {
}
