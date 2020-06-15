import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {EmptyComponent} from '@worktile/planet';

const routes: Routes = [
  {
    path: '**',
    component: EmptyComponent
  },
  {
    path: 'a-module',
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
