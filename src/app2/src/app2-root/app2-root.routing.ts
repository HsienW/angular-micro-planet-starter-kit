import {Route} from '@angular/router';
import {EmptyComponent} from '@worktile/planet';
// import {App2DashboardComponent} from '../app2-dashboard/app2-dashboard.component';
import {App2RouterOutletComponent} from '../app2-router-outlet/app2-router-outlet.component';

export const routers: Route[] = [
  {
    path: 'app2',
    component: App2RouterOutletComponent,
    children: [
      // {
      //   path: '',
      //   redirectTo: 'app2',
      //   pathMatch: 'full'
      // },
      {
        path: 'dashboard',
        loadChildren: () => import('../app2-dashboard/app2-dashboard.module').then(m => m.App2DashboardModule)
      },
      // {
      //   path: 'dashboard',
      //   component: App2DashboardComponent
      // }
    ]
  },
  {
    path: '**',
    component: EmptyComponent
  }
];
