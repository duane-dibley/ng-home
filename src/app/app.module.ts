import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
//
import { DataService } from '../common/data.service';
import { Gateway } from '../common/gateway.service';
import { SearchService } from './components/search/search.service';
import { ViewService } from './components/view/view.service';
//
import { DynamicFormModule } from '../common/dynamic-form/dynamic-form.module';
import { TabsModule } from '../common/tabs/tabs.module';
//
import { AppComponent } from './app.component';
import { SearchComponent } from './components/search/search.component';
import { ViewComponent } from './components/view/view.component';

// const appRoutes: Routes = [
//     { path: 'home', component: HomeComponent },
//     { path: 'posts', component: PostsComponent },
//     { path: 'form', component: FormComponent },
//     { path: '', redirectTo: '/home', pathMatch: 'full' }
// ];

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
        Gateway,
        SearchService,
        ViewService
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }
