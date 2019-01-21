import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { Api1Route } from './routes/api1/api1.route';
import { CompaniesHouseRoute } from './routes/companies-house/companies-house.route';
import { CompaniesSearchComponent } from './components/companies-search/companies-search.component';
import { DynamicFormModule } from '../assets/dynamic-form/dynamic-form.module';
import { HttpClientModule } from '@angular/common/http';
import { CompaniesSearchService } from './components/companies-search/companies-search.service';
import { CompaniesViewComponent } from './components/companies-view/companies-view.component';
import { CompaniesViewService } from './components/companies-view/companies-view.service';
import { TabsModule } from '../assets/tabs/tabs.module';
import { GridsterModule } from 'angular-gridster2';
// TODO - needed for API 1.0 form in component
// should use dynamic form asset and remove
import { FormsModule } from '@angular/forms';

const appRoutes: Routes = [
    { path: 'api1', component: Api1Route },
    { path: 'companies-house', component: CompaniesHouseRoute },
    { path: '', redirectTo: '/companies-house', pathMatch: 'full' }
];

@NgModule({
    bootstrap: [
        AppComponent
    ],

    declarations: [
        Api1Route,
        AppComponent,
        CompaniesHouseRoute,
        CompaniesSearchComponent,
        CompaniesViewComponent
    ],

    imports: [
        BrowserModule,
        DynamicFormModule,
        // TODO - needed for API 1.0 form in component
        // should use dynamic form asset and remove
        FormsModule,
        GridsterModule,
        HttpClientModule,
        RouterModule.forRoot(appRoutes, { useHash: true }),
        TabsModule
    ],

    providers: [
        CompaniesSearchService,
        CompaniesViewService
    ]
})

export class AppModule { }
