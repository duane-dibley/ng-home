import { Component } from '@angular/core';
import { GridsterConfig, GridsterItem } from 'angular-gridster2';

@Component({
  selector: 'api1-route',
  styleUrls: ['./api1.route.scss'],
  templateUrl: './api1.route.html'
})

export class Api1Route {

  dashboard: Array<GridsterItem> = [
    { cols: 1, name: 'filter', rows: 1, x: 0, y: 0 },
    { cols: 3, name: 'chart', rows: 1, x: 1, y: 0 }
  ];

  options: GridsterConfig = {};
}
