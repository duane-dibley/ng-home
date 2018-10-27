import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
//
import { DataService } from '../common/data.service';
import { Gateway } from '../common/gateway.service';
//
import { DynamicFormModule } from '../common/dynamic-form/dynamic-form.module';
import { TabsModule } from '../common/tabs/tabs.module';
//
import { AppComponent } from './app.component';
import { SearchComponent } from './components/search/search.component';
import { ViewComponent } from './components/view/view.component';

@NgModule({
    declarations: [
        AppComponent,
        SearchComponent,
        ViewComponent
    ],
    imports: [
        BrowserModule,
        DynamicFormModule,
        HttpClientModule,
        TabsModule
    ],
    providers: [
        DataService,
        Gateway
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }
