import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'api1-component',
    styleUrls: ['./api1.component.scss'],
    templateUrl: './api1.component.html'
})

export class Api1Component implements OnDestroy, OnInit {

    navigationSubscription: any;

    constructor(private router: Router) {
        this.navigationSubscription = this.router.events.subscribe((e: any) => {
            console.log('navigationSubscription', e);
            // If it is a NavigationEnd event re-initalise the component
            // if (e instanceof NavigationEnd) {
            //     this.initialiseInvites();
            // }
        });
    }

    ngOnDestroy() { }

    ngOnInit() { }
}
