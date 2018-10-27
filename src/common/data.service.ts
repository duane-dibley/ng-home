import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class DataService {
    private searchItemDataSource = new BehaviorSubject({
        links: {
            self: ''
        }
    });

    searchItemData = this.searchItemDataSource.asObservable();

    changeSearchItemData(item: any) {
        this.searchItemDataSource.next(item);
    }
}
