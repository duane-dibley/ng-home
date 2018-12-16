import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceFn } from '../../../common/helper';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SearchService {

    constructor(private httpClient: HttpClient) { }

    // props
    formConfig: any[] = [
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
            options: [
                { label: 'All', value: 'search' },
                { label: 'COMPANY', value: 'search/companies' },
                { label: 'OFFICER', value: 'search/officers' },
                { label: 'DISQUALIFIED OFFICER', value: 'search/disqualified-officers' }
            ],
            placeholder: 'Select an option',
            type: 'select'
        }
    ];
    listItem: Subject<any> = new Subject();
    listStyle: any = {};
    searchList: any[] = [];

    // controller
    onFormChange(formVals) {
        if (formVals.searchVal) {
            debounceFn(
                500,
                () => {
                    const link = (formVals.queryString || 'search') + '?q=' + formVals.searchVal.replace(/ /g, '+') + '&items_per_page=100';

                    this.httpClient.get('/api/' + link, {
                        responseType: 'text',
                    }).subscribe(
                        result => {
                            this.listStyle = {};
                            this.searchList = JSON.parse(result).items;
                        },
                        error => {
                            console.error(error);
                        }
                    );
                }
            );
        } else {
            this.searchList = [];
        }
    }

    onItemSelect(item) {
        this.listStyle = { 'display': 'none' };
        this.listItem.next(item);
    }
}
