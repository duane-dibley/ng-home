// import Zousan from 'zousan';
import { Component, /* , OnChanges, */ OnDestroy, OnInit /*, NgZone */ } from '@angular/core';
import { ViewService } from '../view/view.service';
import { SearchService } from '../search/search.service';
import { Subscription } from 'rxjs';
//
// import { DataService } from '../../../common/data.service';
// import { Gateway } from '../../../common/gateway.service';
// //
// import Model from './model';

@Component({
    selector: 'app-component-view',
    styleUrls: ['./view.component.scss'],
    templateUrl: './view.component.html'
})

export class ViewComponent implements /* OnChanges, */ OnDestroy, OnInit {

    searchItemSub: Subscription;

    // tabItems = [];
    // viewData = {};
    // viewKey = '';
    // viewTypeKey = '';

    // // subscriptions
    // searchItemSubscription: Subscription;

    // // bound methods
    // onSelectListItemBound = this.onSelectListItem.bind(this);
    // onTabChangeBound = this.onTabChange.bind(this);

    constructor(
        private searchService: SearchService,
        public viewSerrvice: ViewService
        //
        // private ds: DataService,
        // private gw: Gateway,
        // private ngZone: NgZone
    ) { }

    // // implemented methods
    // ngOnChanges(args) { }

    ngOnDestroy() {
        this.searchItemSub.unsubscribe();
    }

    ngOnInit() {
        this.searchItemSub = this.searchService.searchItem.subscribe(this.onSelectItem);
    }

    onSelectItem(item) {
        console.log('onSelectItem', item);
    }

    // // actions
    // onFilingItemClick(item) {
    //     const split = item.links.document_metadata.split('/'),
    //         lgt = split.length,
    //         id = split[split.length - 1];

    //     this.gw.docMetadata('document/' + id)
    //         .finally(meta => {
    //             console.log(meta);
    //         }).catch(console.error);

    //     // TODO - unable to get useable response
    //     //     this.gw.fetchDoc('document/' + id + '/content')
    //     //         .finally(doc => {
    //     //             console.log(doc);
    //     //         }).catch(console.error);
    // }

    // onSelectListItem(searchItem) {
    //     const { self } = searchItem.links;

    //     if (self) {
    //         if (self.indexOf('company') > -1) {
    //             this.tabItems.push({
    //                 label: searchItem.title.trim(),
    //                 params: { item: searchItem, typ: 'company' },
    //                 val: self
    //             });
    //             this.setCompany(searchItem);
    //             return;
    //         }

    //         if (self.indexOf('disqualified') > -1) {
    //             this.tabItems.push({
    //                 label: searchItem.title.trim(),
    //                 params: { item: searchItem, typ: 'disqualified' },
    //                 val: self
    //             });
    //             this.setDisqualified(searchItem);
    //             return;
    //         }

    //         this.tabItems.push({
    //             label: searchItem.title.trim(),
    //             params: { item: searchItem, typ: 'officer' },
    //             val: self
    //         });
    //         this.setOfficer(searchItem);
    //     }
    // }

    // onTabChange(tabItem) {
    //     const { params } = tabItem,
    //         { item, typ } = params;

    //     if (typ === 'company') {
    //         this.setCompany(item);
    //         return;
    //     }

    //     if (typ === 'disqualified') {
    //         this.setDisqualified(item);
    //         return;
    //     }

    //     this.setOfficer(item);
    // }

    // // helper functions
    // setCompany(cmp) {
    //     const { self } = cmp.links,
    //         { gw, viewData } = this;

    //     if (!viewData[self]) {
    //         Zousan.all([
    //             gw.fetchLink(self + '/' + Model.address.qStr),
    //             gw.fetchLink(self + '/' + Model.charges.qStr),
    //             gw.fetchLink(self + '/' + Model.exemptions.qStr),
    //             gw.fetchLink(self + '/' + Model.filingHistory.qStr),
    //             gw.fetchLink(self + '/' + Model.insolvency.qStr),
    //             gw.fetchLink(self + '/' + Model.officers.qStr),
    //             gw.fetchLink(self + '/' + Model.profile.qStr),
    //             gw.fetchLink(self + '/' + Model.registers.qStr),
    //             gw.fetchLink(self + '/' + Model.sigControl.qStr),
    //             gw.fetchLink(self + '/' + Model.ukEstablish.qStr)
    //         ]).then(data => {
    //             let charges;

    //             if (data[1]) {
    //                 charges = Object.assign(data[1], {
    //                     items: data[1].items.map(item => Object.assign(item, { val: item.charge_number, label: item.created_on }))
    //                 });
    //             }

    //             Object.assign(this.viewData, {
    //                 [self]: {
    //                     address: data[0],
    //                     charges: charges,
    //                     exemptions: data[2],
    //                     filingHistory: data[3],
    //                     insolvency: data[4],
    //                     officers: data[5],
    //                     profile: data[6],
    //                     registers: data[7],
    //                     sigControl: data[8],
    //                     ukEstablish: data[9]
    //                 }
    //             });
    //         }).finally(() => {
    //             this.ngZone.run(() => {
    //                 this.viewTypeKey = 'company';
    //                 this.viewKey = self;
    //             });
    //         }).catch(console.error);
    //     } else {
    //         this.viewTypeKey = 'company';
    //         this.viewKey = self;
    //     }
    // }

    // setDisqualified(officer) {
    //     const { self } = officer.links;
    //     this.gw.fetchLink(self)
    //         .then(data => Object.assign(this.viewData, { [self]: Object.assign(officer, { appointments: data }) }))
    //         .finally(() => {
    //             this.ngZone.run(() => {
    //                 this.viewTypeKey = 'disqualified';
    //                 this.viewKey = self;
    //             });
    //         })
    //         .catch(console.error);
    // }

    // setOfficer(officer) {
    //     const { self } = officer.links;
    //     this.gw.fetchLink(self)
    //         .then(data => Object.assign(this.viewData, { [self]: Object.assign(officer, { appointments: data }) }))
    //         .finally(() => {
    //             this.ngZone.run(() => {
    //                 this.viewTypeKey = 'officer';
    //                 this.viewKey = self;
    //             });
    //         })
    //         .catch(console.error);
    // }
}
