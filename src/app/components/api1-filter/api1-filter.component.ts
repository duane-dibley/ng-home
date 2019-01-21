import { Component } from '@angular/core';
import { Api1FilterService } from './api1-filter.service';

@Component({
  selector: 'api1-filter-component',
  styleUrls: ['./api1-filter.component.scss'],
  templateUrl: './api1-filter.component.html'
})

export class Api1FilterComponent {
  constructor(private api1FilterService: Api1FilterService) { }
}
