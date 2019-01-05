import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { Api1Component } from './components/api1/api1.component';
import { CompaniesHouseComponent } from './components/companies-house/companies-house.component';
import { SearchComponent } from './components/search/search.component';
import { DynamicFormModule } from '../assets/dynamic-form/dynamic-form.module';
import { HttpClientModule } from '@angular/common/http';
import { SearchService } from './components/search/search.service';
import { ViewComponent } from './components/view/view.component';
import { ViewService } from './components/view/view.service';
import { TabsModule } from '../assets/tabs/tabs.module';
// TODO - needed for API 1.0 form in component
// should use dynamic form asset and remove
import { FormsModule } from '@angular/forms';

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
        // TODO - needed for API 1.0 form in component
        // should use dynamic form asset and remove
        FormsModule,
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
