import { Component } from '@angular/core';
import { CompaniesSearchService } from './companies-search.service';

@Component({
    selector: 'companies-search-component',
    styleUrls: ['./companies-search.component.scss'],
    templateUrl: './companies-search.component.html'
})

export class CompaniesSearchComponent {
    constructor(public companiesSearchService: CompaniesSearchService) { }
}
