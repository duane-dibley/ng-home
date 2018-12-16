import { Component, EventEmitter, Input, Output, ViewChild, ElementRef } from '@angular/core';
import { CompileShallowModuleMetadata } from '@angular/compiler';

@Component({
    selector: 'tabs-component',
    styleUrls: ['./tabs.component.scss'],
    templateUrl: './tabs.component.html'
})

export class TabsComponent {
    @Input()
    active: String = '';

    @Input()
    tabItems: any[] = [];

    @Output()
    tabChange: EventEmitter<any> = new EventEmitter<any>();

    @ViewChild('anchor')
    anchor: ElementRef;

    @ViewChild('item')
    item: ElementRef;

    // used to compact text on hover
    hoverTab: any = { val: '', style: '' };

    onMouseleave(tab, rect) {
        this.hoverTab = { val: tab.val, style: '' };
    }

    onMouseover(tab, rect) {
        this.hoverTab = { val: tab.val, style: { 'width': rect.width - 20 + 'px' } };
    }
}
