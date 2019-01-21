import { Component, OnDestroy, OnInit } from '@angular/core';
import { CompaniesViewService } from './companies-view.service';
import { CompaniesSearchService } from '../companies-search/companies-search.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'companies-view-component',
    styleUrls: ['./companies-view.component.scss'],
    templateUrl: './companies-view.component.html'
})

export class CompaniesViewComponent implements OnDestroy, OnInit {

    searchItemSub: Subscription;

    constructor(
        private companiesSearchService: CompaniesSearchService,
        public companiesViewService: CompaniesViewService
    ) { }

    ngOnDestroy() {
        this.searchItemSub.unsubscribe();
    }

    ngOnInit() {
        this.searchItemSub = this.companiesSearchService.listItem.subscribe(item => this.companiesViewService.onSelectListItem(item));
    }
}
