import { Injectable } from '@angular/core';
import { companiesViewModel } from './companies-view.model';
import { HttpClient } from '@angular/common/http';
import { forkJoin, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class CompaniesViewService {

    constructor(private http: HttpClient) { }

    tabItems = [];
    viewData = {};
    viewTypeKey = '';
    viewKey = '';

    ///// event handlers
    onSelectListItem(searchItem) {
        const { self } = searchItem.links;

        if (self) {
            if (self.indexOf('company') > -1) {
                this.viewTypeKey = 'company';
                this.tabItems.push({
                    label: searchItem.title.trim(),
                    params: { item: searchItem, type: 'company' },
                    val: self
                });
                this.setCompany(searchItem);
                return;
            }

            if (self.indexOf('disqualified') > -1) {
                this.viewTypeKey = 'disqualified';
                this.tabItems.push({
                    label: searchItem.title.trim(),
                    params: { item: searchItem, type: 'disqualified' },
                    val: self
                });
                this.setDisqualified(searchItem);
                return;
            }

            this.viewTypeKey = 'officer';
            this.tabItems.push({
                label: searchItem.title.trim(),
                params: { item: searchItem, type: 'officer' },
                val: self
            });
            this.setOfficer(searchItem);
        }
    }

    onTabChange(tabItem) {
        this.viewKey = tabItem.val;
    }

    ///// data model
    setCompany(item) {
        const { self } = item.links,
            { viewData } = this;

        this.viewKey = self;

        forkJoin([
            this.apiHttpLink(self + '/' + companiesViewModel.address.query),
            this.apiHttpLink(self + '/' + companiesViewModel.charges.query),
            this.apiHttpLink(self + '/' + companiesViewModel.control.query),
            this.apiHttpLink(self + '/' + companiesViewModel.establishments.query),
            this.apiHttpLink(self + '/' + companiesViewModel.exemptions.query),
            this.apiHttpLink(self + '/' + companiesViewModel.filing.query),
            this.apiHttpLink(self + '/' + companiesViewModel.insolvency.query),
            this.apiHttpLink(self + '/' + companiesViewModel.officers.query),
            this.apiHttpLink(self + '/' + companiesViewModel.profile.query),
            this.apiHttpLink(self + '/' + companiesViewModel.registers.query)
        ]).subscribe(
            result => {
                Object.assign(viewData, {
                    [self]: {
                        address: result[0]
                    }
                });
            },

            error => {
                console.log('getCompany-error', error);
            }
        );
    }

    setDisqualified(item) {
        // TODO - selcted item is disqualified officer
        console.log('setDisqualified', item);
    }

    setOfficer(item) {
        // TODO - selected item is officer
        console.log('setOfficer', item);
    }

    ///// helpers
    apiError(error) {
        console.error(error);
    }

    apiHttpLink(link) {
        return this.http.get('/companies' + link).pipe(catchError(() => of(false)));
    }
}
