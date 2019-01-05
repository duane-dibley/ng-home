import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { Api1Component } from './components/api1/api1.component';
import { CompaniesHouseComponent } from './components/companies-house/companies-house.component';
import { SearchComponent } from './components/search/search.component';
import { DynamicFormModule } from '../common/dynamic-form/dynamic-form.module';
import { HttpClientModule } from '@angular/common/http';
import { SearchService } from './components/search/search.service';
import { ViewComponent } from './components/view/view.component';
import { ViewService } from './components/view/view.service';
import { TabsModule } from '../common/tabs/tabs.module';

const appRoutes: Routes = [
    { path: 'api1', component: Api1Component },
    { path: 'companies-house', component: CompaniesHouseComponent },
    { path: '', redirectTo: '/companies-house', pathMatch: 'full' }
];

@NgModule({
    bootstrap: [
        AppComponent
    ],

    declarations: [
        Api1Component,
        AppComponent,
        CompaniesHouseComponent,
        SearchComponent,
        ViewComponent
    ],

    imports: [
        BrowserModule,
        DynamicFormModule,
        HttpClientModule,
        RouterModule.forRoot(appRoutes, { useHash: true }),
        TabsModule
    ],

    providers: [
        SearchService,
        ViewService
    ]
})

export class AppModule { }
