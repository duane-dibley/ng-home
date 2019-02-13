import { Component, OnInit } from '@angular/core';
import { Api1FilterService } from './api1-filter.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'api1-filter-component',
  styleUrls: ['./api1-filter.component.scss'],
  templateUrl: './api1-filter.component.html'
})

export class Api1FilterComponent implements OnInit {

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
    private api1FilterService: Api1FilterService
  ) { }

  ngOnInit() {
    this.formValues.subscribe(formValues => this.setSyms(formValues));
  }

  setSyms(formValues) {
    this.api1FilterService.getSyms(formValues);
  }
}
