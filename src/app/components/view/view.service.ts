import { Injectable, NgZone } from '@angular/core';
import { companyModel } from './view.model';
import { HttpClient } from '@angular/common/http';
import { forkJoin, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ViewService {

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
            this.apiHttpLink(self + '/' + companyModel.address.query),
            this.apiHttpLink(self + '/' + companyModel.charges.query),
            this.apiHttpLink(self + '/' + companyModel.control.query),
            this.apiHttpLink(self + '/' + companyModel.establishments.query),
            this.apiHttpLink(self + '/' + companyModel.exemptions.query),
            this.apiHttpLink(self + '/' + companyModel.filing.query),
            this.apiHttpLink(self + '/' + companyModel.insolvency.query),
            this.apiHttpLink(self + '/' + companyModel.officers.query),
            this.apiHttpLink(self + '/' + companyModel.profile.query),
            this.apiHttpLink(self + '/' + companyModel.registers.query)
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
        return this.http.get('/api' + link).pipe(catchError(() => of(false)));
    }
}
