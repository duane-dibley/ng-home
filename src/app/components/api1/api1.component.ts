import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'api1-component',
    styleUrls: ['./api1.component.scss'],
    templateUrl: './api1.component.html'
})

export class Api1Component {

    inputValue = '';

    constructor(private http: HttpClient) { }

    clickButton() {
        const { inputValue } = this;

        this.http.get('/api/stock/' + inputValue + '/stats')
            .subscribe(result => {
                console.log(result);
            });
    }
}
