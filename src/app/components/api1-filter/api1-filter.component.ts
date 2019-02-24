import { Component, OnInit } from '@angular/core';
import { Api1FilterService } from './api1-filter.service';
import { forkJoin } from 'rxjs';
import { Api1Service } from '../../api/api1.service';
import { ViewData } from './api1-filter.model';
import { Subject } from 'rxjs';

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
    },
    {
      label: 'Range',
      options: [
        '5yr',
        '2yr',
        '1yr',
        'ytd',
        '6m',
        '3m',
        '1m',
        '1d',
        'date',
        'dynamic'
      ],
      name: 'range',
      type: 'matSelect'
    },
    {
      label: 'Submit',
      name: 'submit',
      type: 'matSubmit'
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

  formSubmit(formVals) {
    const { sym } = formVals;

    forkJoin([
      this.api1Service.getPath('stock/symbol/chart', { symbol: sym }),
      this.api1Service.getPath('stock/symbol/company', { symbol: sym })
    ]).subscribe(
      result => this.viewData = Object.assign({}, {
        chart: result[0],
        company: result[1]
      }),

      error => {
        console.error('formSubmit-error', error);
      }
    );
  }

  setSyms(formValues) {
    this.api1FilterService.getSyms(formValues);
  }
}
