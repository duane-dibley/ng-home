import { Injectable, OnDestroy, OnInit } from '@angular/core';
import { SearchService } from '../search/search.service';
import { Subscription } from 'rxjs';

@Injectable()
export class ViewService {

    searchItemSub: Subscription;
    tabItems = [];
    viewData = {};
    viewKey = '';
    viewTypeKey = '';

    // subscriptions
    searchItemSubscription: Subscription;

    constructor(
        private searchService: SearchService
    ) {
        // this.searchItemSub = this.searchService.searchItem.asObservable().subscribe(this.onSearchItem);
    }

    // onSearchItem() {
    //     console.log('onSearchItem');
    // }
}
