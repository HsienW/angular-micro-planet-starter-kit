import {Component, OnInit} from '@angular/core';
import {App2DashboardService} from './app2-dashboard.service';

@Component({
  selector: 'app2-dashboard',
  templateUrl: './app2-dashboard.component.html',
  styleUrls: ['./app2-dashboard.component.css']
})
export class App2DashboardComponent implements OnInit {

  constructor(
    private app2DashboardService: App2DashboardService,
  ) {
  }

  ngOnInit() {
    this.app2DashboardService.test();
  }

  sayHello() {
    alert('Hello, I am app2 dashboard');
  }

}
