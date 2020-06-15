import {Component, OnInit} from '@angular/core';
import {GlobalEventDispatcher} from '@worktile/planet';
import {DomPortalOutlet} from '@angular/cdk/portal';

@Component({
  selector: 'app1-dashboard',
  templateUrl: './app1-dashboard.component.html',
  styleUrls: ['./app1-dashboard.component.css']
})
export class App1DashboardComponent implements OnInit {

  private domPortalOutletCache = new WeakMap<any, DomPortalOutlet>();

  constructor(
    private globalEventDispatcher: GlobalEventDispatcher
  ) {
  }

  ngOnInit() {
  }

  appDispatcherDemo() {
    this.globalEventDispatcher.dispatch('app-dispatcher-demo', 'dispatcher from app1');
  }

  openApp2DashboardDemo() {
    // const container = this.getContainerElement(config);
    // let portalOutlet = this.domPortalOutletCache.get(container);
  }

}
