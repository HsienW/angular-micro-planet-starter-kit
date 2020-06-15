import {Component, OnInit} from '@angular/core';
import {GlobalEventDispatcher} from '@worktile/planet';

@Component({
  selector: 'app2-dashboard',
  templateUrl: './app2-dashboard.component.html',
  styleUrls: ['./app2-dashboard.component.css']
})
export class App2DashboardComponent implements OnInit {

  constructor(
    private globalEventDispatcher: GlobalEventDispatcher
  ) {
    this.globalEventDispatcher.register('app-dispatcher-demo').subscribe((payload: string) => {
      alert('I am app2, payload value: ' + payload);
    });
  }

  ngOnInit() {
  }

}
