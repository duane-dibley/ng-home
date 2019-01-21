import { Component } from '@angular/core';
import { GridsterConfig, GridsterItem } from 'angular-gridster2';

@Component({
    selector: 'api1-route',
    styleUrls: ['./api1.route.scss'],
    templateUrl: './api1.route.html'
})

export class Api1Route {

    dashboard: Array<GridsterItem> = [
        { cols: 1, rows: 1, y: 0, x: 0 },
        { cols: 1, rows: 1, y: 1, x: 0 }
    ];

    options: GridsterConfig = {};
}
