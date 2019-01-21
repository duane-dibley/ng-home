import { Component } from '@angular/core';
import { Api1ChartService } from './api1-chart.service';

@Component({
  selector: 'api1-chart-component',
  styleUrls: ['./api1-chart.component.scss'],
  templateUrl: './api1-chart.component.html'
})

export class Api1ChartComponent {
  constructor(private api1ChartService: Api1ChartService) { }
}
