import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {GlobalEventDispatcher, PlanetComponentLoader} from '@worktile/planet';
// import {App1DashboardService} from './app1-dashboard.service';

@Component({
  selector: 'app1-dashboard',
  templateUrl: './app1-dashboard.component.html',
  styleUrls: ['./app1-dashboard.component.css']
})
export class App1DashboardComponent implements OnInit {

  loadingApp1Dashboard = false;

  @ViewChild('container', {static: true}) containerElementRef: ElementRef<HTMLDivElement>;

  constructor(
    // private app1DashboardService: App1DashboardService,
    private globalEventDispatcher: GlobalEventDispatcher,
    private planetComponentLoader: PlanetComponentLoader
  ) {
  }

  ngOnInit() {
    // this.app1DashboardService.test();
  }

  openApp2DashboardDemo() {
    this.planetComponentLoader.load('app2', 'app2-dashboard-component', {
      container: this.containerElementRef,
      initialState: {}
    });
    this.loadingApp1Dashboard = true;
  }

  dispatcherToApp2Action() {
    this.globalEventDispatcher.dispatch('app-dispatcher-demo', 'dispatcher from app1');
  }

}
