import { Component, Input } from '@angular/core';

@Component({
    selector: 'tabs-component',
    styleUrls: ['./tabs.component.scss'],
    templateUrl: './tabs.component.html'
})

export class TabsComponent {
    hoverTab = '';

    @Input()
    active: '';
    @Input()
    tabItems: any[] = [];
    @Input()
    tabChange: Function;

    itemMouseEnter(tab) {
        this.hoverTab = tab;
    }

    itemMouseLeave() {
        this.hoverTab = '';
    }

    listMouseEnter(evt) {
        console.log('listMouseEnter', evt);
    }

    listMouseLeave(evt) {
        console.log('listMouseLeave', evt);
    }

    onTabChange(tab) {
        if (this.tabChange) {
            this.tabChange(tab);
        }
    }
}
