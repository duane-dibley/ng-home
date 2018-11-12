import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { Api1Component } from './components/api1/api1.component';
import { ChComponent } from './components/ch/ch.component';
import { SearchComponent } from './components/search/search.component';
import { DynamicFormModule } from '../common/dynamic-form/dynamic-form.module';
import { HttpClientModule } from '@angular/common/http';
import { SearchService } from './components/search/search.service';
import { ViewComponent } from './components/view/view.component';
import { ViewService } from './components/view/view.service';

const appRoutes: Routes = [
    { path: 'api1', component: Api1Component },
    { path: 'ch', component: ChComponent },
    { path: '', redirectTo: '/ch', pathMatch: 'full' }
];

@NgModule({
    bootstrap: [
        AppComponent
    ],

    declarations: [
        Api1Component,
        AppComponent,
        ChComponent,
        SearchComponent,
        ViewComponent
    ],

    imports: [
        BrowserModule,
        DynamicFormModule,
        HttpClientModule,
        RouterModule.forRoot(appRoutes)
    ],

    providers: [
        SearchService,
        ViewService
    ]
})

export class AppModule { }
//
// import { BrowserModule } from '@angular/platform-browser';
// import { HttpClientModule } from '@angular/common/http';
// import { NgModule } from '@angular/core';
// //
// import { DataService } from '../common/data.service';
// import { Gateway } from '../common/gateway.service';
// import { SearchService } from './components/search/search.service';
// import { ViewService } from './components/view/view.service';
// //
// import { DynamicFormModule } from '../common/dynamic-form/dynamic-form.module';
// import { TabsModule } from '../common/tabs/tabs.module';
// //
// import { AppComponent } from './app.component';
// import { SearchComponent } from './components/search/search.component';
// import { ViewComponent } from './components/view/view.component';

// @NgModule({
//     declarations: [
//         AppComponent,
//         SearchComponent,
//         ViewComponent
//     ],
//     imports: [
//         BrowserModule,
//         DynamicFormModule,
//         HttpClientModule,
//         TabsModule
//     ],
//     providers: [
//         DataService,
//         Gateway,
//         SearchService,
//         ViewService
//     ],
//     bootstrap: [AppComponent]
// })

// export class AppModule { }
