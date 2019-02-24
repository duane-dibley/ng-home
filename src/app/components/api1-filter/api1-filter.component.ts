import { Component, OnInit } from '@angular/core';
import { Api1FilterService } from './api1-filter.service';
import { BehaviorSubject, Subject } from 'rxjs';
import { forkJoin } from 'rxjs';
import { Api1Service } from '../../api/api1.service';
import { ViewData } from './api1-filter.model';

@Component({
  selector: 'api1-filter-component',
  styleUrls: ['./api1-filter.component.scss'],
  templateUrl: './api1-filter.component.html'
})

export class Api1FilterComponent implements OnInit {

  viewData: ViewData = {
    chart: [],
    company: {}
  };

  formConfig: any[] = [
    {
      label: 'Sym: ',
      name: 'sym',
      placeholder: 'Enter symbol of stock',
      type: 'matInput'
    }
  ];

  formValues: Subject<any> = new Subject();

  syms: any;

  constructor(
    private api1FilterService: Api1FilterService,
    private api1Service: Api1Service
  ) { }

  ngOnInit() {
    this.formValues.subscribe(formValues => this.setSyms(formValues));
  }

  searchClick() {
    forkJoin([
      this.api1Service.getPath('stock/symbol/chart', { symbol: 'MSFT' }),
      this.api1Service.getPath('stock/symbol/company', { symbol: 'MSFT' })
    ]).subscribe(
      result => this.viewData = Object.assign({}, {
        chart: result[0],
        company: result[1]
      }),

      error => {
        console.error('getCompany-error', error);
      }
    );
  }

  setSyms(formValues) {
    this.api1FilterService.getSyms(formValues);
  }
}
