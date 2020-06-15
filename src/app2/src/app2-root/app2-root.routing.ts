import {Route} from '@angular/router';
import {EmptyComponent} from '@worktile/planet';
import {App2DashboardComponent} from '../app2-dashboard/app2-dashboard.component';
import {App2RootComponent} from './app2-root.component';

export const routers: Route[] = [
  {
    path: 'app2',
    component: App2RootComponent,
    children: [
      {
        path: '',
        redirectTo: 'app2',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        component: App2DashboardComponent
      }
    ]
  },
  {
    path: '**',
    component: EmptyComponent
  }
];
