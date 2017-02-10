import { NgModule }                             from '@angular/core';
import { BrowserModule }                        from '@angular/platform-browser';
import { FormsModule }                          from '@angular/forms';
import { HttpModule }                           from '@angular/http';
import { RouterModule, Router }                 from '@angular/router';

// import { SDKBrowserModule }                     from '../modules/platform-server-sdk/lib/serversdk/index';

import { PlatformServerSDKModule }              from './../modules/platform-server-sdk/platform-server-sdk.module';
// import { PlatformServerSDKService }             from '../modules/platform-server-sdk/platform-server-sdk.service';
import { NgSemanticModule }                     from "ng-semantic/ng-semantic"

import { routes }                               from './app.routes';
import { AppComponent }                         from './app.component';
import { MenuComponent }                        from './menu/menu.component';
import { DashboardComponent }                   from './dashboard/dashboard.component';
import { SettingsComponent }                    from './settings/settings.component';
import { DesktopComponent }                     from './desktop/desktop.component';
import { StatsComponent }                       from './dashboard/stats/stats.component';
import { IBAccountComponent }                   from './settings/ibaccount/ibaccount.component';
import { SettingsOverviewComponent }            from './settings/settings-overview/settings-overview.component';

@NgModule({

    declarations: [

        AppComponent,
        MenuComponent,
        DashboardComponent,
        SettingsComponent,
        DesktopComponent,
        StatsComponent,
        IBAccountComponent,
        SettingsOverviewComponent,

    ],

    imports: [
        
        PlatformServerSDKModule.forRoot(),
        RouterModule.forRoot(routes),

        BrowserModule,
        FormsModule,
        HttpModule, 
        
        NgSemanticModule,
    
    ],
    
    bootstrap: [ AppComponent ]
  
})
export class AppModule { }
