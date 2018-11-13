import { Injectable } from '@angular/core';

@Injectable()
export class ViewService {

    constructor() { }

    tabItems = [];
    viewKey = '';

    onSelectListItem(searchItem) {
        const { self } = searchItem.links;

        if (self) {
            if (self.indexOf('company') > -1) {
                this.tabItems.push({
                    label: searchItem.title.trim(),
                    params: { item: searchItem, typ: 'company' },
                    val: self
                });
                this.setCompany(searchItem);
                return;
            }

            if (self.indexOf('disqualified') > -1) {
                this.tabItems.push({
                    label: searchItem.title.trim(),
                    params: { item: searchItem, typ: 'disqualified' },
                    val: self
                });
                this.setDisqualified(searchItem);
                return;
            }

            this.tabItems.push({
                label: searchItem.title.trim(),
                params: { item: searchItem, typ: 'officer' },
                val: self
            });
            this.setOfficer(searchItem);
        }
    }

    // helper functions
    setCompany(item) {
        // console.log('setCompany', item);
        //
        const { self } = item.links;
        this.viewKey = self;
        //     { gw, viewData } = this;

        // if (!viewData[self]) {
        //     Zousan.all([
        //         gw.fetchLink(self + '/' + Model.address.qStr),
        //         gw.fetchLink(self + '/' + Model.charges.qStr),
        //         gw.fetchLink(self + '/' + Model.exemptions.qStr),
        //         gw.fetchLink(self + '/' + Model.filingHistory.qStr),
        //         gw.fetchLink(self + '/' + Model.insolvency.qStr),
        //         gw.fetchLink(self + '/' + Model.officers.qStr),
        //         gw.fetchLink(self + '/' + Model.profile.qStr),
        //         gw.fetchLink(self + '/' + Model.registers.qStr),
        //         gw.fetchLink(self + '/' + Model.sigControl.qStr),
        //         gw.fetchLink(self + '/' + Model.ukEstablish.qStr)
        //     ]).then(data => {
        //         let charges;

        //         if (data[1]) {
        //             charges = Object.assign(data[1], {
        //                 items: data[1].items.map(item => Object.assign(item, { val: item.charge_number, label: item.created_on }))
        //             });
        //         }

        //         Object.assign(this.viewData, {
        //             [self]: {
        //                 address: data[0],
        //                 charges: charges,
        //                 exemptions: data[2],
        //                 filingHistory: data[3],
        //                 insolvency: data[4],
        //                 officers: data[5],
        //                 profile: data[6],
        //                 registers: data[7],
        //                 sigControl: data[8],
        //                 ukEstablish: data[9]
        //             }
        //         });
        //     }).finally(() => {
        //         this.ngZone.run(() => {
        //             this.viewTypeKey = 'company';
        //             this.viewKey = self;
        //         });
        //     }).catch(console.error);
        // } else {
        //     this.viewTypeKey = 'company';
        //     this.viewKey = self;
        // }
    }

    setDisqualified(item) {
        console.log('setDisqualified', item);
        //
        // const { self } = officer.links;
        // this.gw.fetchLink(self)
        //     .then(data => Object.assign(this.viewData, { [self]: Object.assign(officer, { appointments: data }) }))
        //     .finally(() => {
        //         this.ngZone.run(() => {
        //             this.viewTypeKey = 'disqualified';
        //             this.viewKey = self;
        //         });
        //     })
        //     .catch(console.error);
    }

    setOfficer(item) {
        console.log('setOfficer', item);
        //
        // const { self } = officer.links;
        // this.gw.fetchLink(self)
        //     .then(data => Object.assign(this.viewData, { [self]: Object.assign(officer, { appointments: data }) }))
        //     .finally(() => {
        //         this.ngZone.run(() => {
        //             this.viewTypeKey = 'officer';
        //             this.viewKey = self;
        //         });
        //     })
        //     .catch(console.error);
    }
}
