import { Component } from '@angular/core';
import { SearchService } from './search.service';

@Component({
    selector: 'search-component',
    styleUrls: ['./search.component.scss'],
    templateUrl: './search.component.html'
})

export class SearchComponent {
    constructor(public searchService: SearchService) { }
}
