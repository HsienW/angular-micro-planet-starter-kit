import {Route} from '@angular/router';
import {EmptyComponent} from '@worktile/planet';
import {App1DashboardComponent} from '../app1-dashboard/app1-dashboard.component';
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
      {
        path: 'dashboard',
        component: App1DashboardComponent
      }
    ]
  },
  {
    path: '**',
    component: EmptyComponent
  }
];
