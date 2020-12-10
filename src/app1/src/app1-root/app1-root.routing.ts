import {Route} from '@angular/router';
import {EmptyComponent} from '@worktile/planet';
import {App1RootComponent} from './app1-root.component';

export const routers: Route[] = [
  {
    path: 'app1',
    component: App1RootComponent,
    children: [
      {
        path: '',
        redirectTo: 'app1',
        pathMatch: 'full'
      },
      // {
      //   path: 'dashboard',
      //   loadChildren: () => import('../app1-dashboard/app1-dashboard.module').then(m => m.App1DashboardModule)
      // },
      // {
        // path: 'dashboard',
        // component: App1DashboardComponent
      // }
    ]
  },
  {
    path: '**',
    component: EmptyComponent
  }
];
