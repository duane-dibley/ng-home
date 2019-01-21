import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
// TODO - needed for API 1.0 form in component
// should use dynamic form asset and remove
import { FormsModule } from '@angular/forms';
// libs
import { GridsterModule } from 'angular-gridster2';
// assets
import { DynamicFormModule } from '../assets/dynamic-form/dynamic-form.module';
import { TabsModule } from '../assets/tabs/tabs.module';
// routes
import { Api1Route } from './routes/api1/api1.route';
import { CompaniesRoute } from './routes/companies/companies.route';
// components
import { Api1ChartComponent } from './components/api1-chart/api1-chart.component';
import { Api1FilterComponent } from './components/api1-filter/api1-filter.component';
import { CompaniesSearchComponent } from './components/companies-search/companies-search.component';
import { CompaniesViewComponent } from './components/companies-view/companies-view.component';
// services
import { Api1ChartService } from './components/api1-chart/api1-chart.service';
import { Api1FilterService } from './components/api1-filter/api1-filter.service';
import { CompaniesSearchService } from './components/companies-search/companies-search.service';
import { CompaniesViewService } from './components/companies-view/companies-view.service';

const appRoutes: Routes = [
  { path: 'api1', component: Api1Route },
  { path: 'companies', component: CompaniesRoute },
  { path: '', redirectTo: '/companies', pathMatch: 'full' }
];

@NgModule({
  bootstrap: [
    AppComponent
  ],

  declarations: [
    Api1ChartComponent,
    Api1FilterComponent,
    Api1Route,
    AppComponent,
    CompaniesRoute,
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
    Api1ChartService,
    Api1FilterService,
    CompaniesSearchService,
    CompaniesViewService
  ]
})

export class AppModule { }
