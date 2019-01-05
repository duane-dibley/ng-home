import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TabsComponent } from './tabs.component';

@NgModule({
    declarations: [TabsComponent],
    exports: [TabsComponent],
    imports: [BrowserModule]
})

export class TabsModule { }
