import { Component, NgZone } from '@angular/core';
//
import { debounceFn } from '../../../common/helper';
import { DataService } from '../../../common/data.service';
import { Gateway } from '../../../common/gateway.service';

@Component({
    selector: 'app-component-search',
    styleUrls: ['./search.component.scss'],
    templateUrl: './search.component.html'
})

export class SearchComponent {
    // component props
    isSearching = false;
    searchList = [];
    searchTypes = [
        { label: 'All', queryString: 'search' },
        { label: 'COMPANY', queryString: 'search/companies' },
        { label: 'OFFICER', queryString: 'search/officers' },
        { label: 'DISQUALIFIED OFFICER', queryString: 'search/disqualified-officers' }
    ];
    ulStyle = {};

    // form config
    config = [
        {
            fieldStyle: {
                'display': 'inline-block',
                'padding': '5px'
            },
            label: 'Search: ',
            name: 'searchVal',
            placeholder: 'Enter name of officer/company',
            type: 'input'
        },
        {
            fieldStyle: {
                'display': 'inline-block',
                'padding': '5px'
            },
            label: 'Search Type: ',
            name: 'queryString',
            options: this.searchTypes.map((item) => ({ label: item.label, val: item.queryString })),
            placeholder: 'Select an option',
            type: 'select'
        }
    ];

    // bound methods
    setListBound = this.setList.bind(this);

    constructor(
        private dataService: DataService,
        private gateway: Gateway,
        private ngZone: NgZone
    ) { }

    // template handlers
    formChanged(formVals) {
        if (formVals.searchVal) {
            debounceFn(500, this.setListBound, formVals);
        } else {
            this.searchList = [];
        }
    }

    listItemClick(item) {
        this.ulStyle = { 'display': 'none' };
        this.dataService.changeSearchItemData(Object.assign(item));
    }

    // helper functions
    setList(formVals) {
        const _this = this,
            link = (formVals.queryString || 'search') +
                '?q=' + formVals.searchVal.replace(/ /g, '+') +
                '&items_per_page=100';

        this.gateway.fetchLink(link)
            .finally(result => {
                this.ngZone.run(() => {
                    this.searchList = result.items;
                    this.ulStyle = {};
                });
            })
            .catch(console.error);
    }
}
