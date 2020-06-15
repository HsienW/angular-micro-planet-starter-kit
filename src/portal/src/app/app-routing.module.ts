import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {EmptyComponent} from '@worktile/planet';

import {HomeComponent} from '../home/home.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'app1',
    component: EmptyComponent,
    children: [
      {
        path: '**',
        component: EmptyComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {paramsInheritanceStrategy: 'always'})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
