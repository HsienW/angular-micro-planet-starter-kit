import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app2-dashboard',
  templateUrl: './app2-dashboard.component.html',
  styleUrls: ['./app2-dashboard.component.css']
})
export class App2DashboardComponent implements OnInit {

  constructor(
  ) {
  }

  ngOnInit() {
  }

  sayHello() {
    alert('Hello, I am app2 dashboard');
  }

}
