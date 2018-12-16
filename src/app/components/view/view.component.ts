import { Component, OnDestroy, OnInit } from '@angular/core';
import { ViewService } from './view.service';
import { SearchService } from '../search/search.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'view-component',
    styleUrls: ['./view.component.scss'],
    templateUrl: './view.component.html'
})

export class ViewComponent implements OnDestroy, OnInit {

    searchItemSub: Subscription;

    constructor(
        private searchService: SearchService,
        public viewService: ViewService
    ) { }

    ngOnDestroy() {
        this.searchItemSub.unsubscribe();
    }

    ngOnInit() {
        this.searchItemSub = this.searchService.listItem.subscribe(item => this.viewService.onSelectListItem(item));
    }
}
