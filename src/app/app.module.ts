import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Router, Resolve, RouterStateSnapshot,
         ActivatedRouteSnapshot } from '@angular/router';

import { NgSemanticModule } from "ng-semantic/ng-semantic"

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { DesktopComponent } from './desktop/desktop.component';
import { StatsComponent } from './dashboard/stats/stats.component';
import { IBAccountComponent } from './settings/ibaccount/ibaccount.component';

import { routes } from './app.routes';
import { SettingsOverviewComponent } from './settings/settings-overview/settings-overview.component';
import { PlatformServerSDKModule }              from '../modules/platform-server-sdk/platform-server-sdk.module';
import { SDKBrowserModule }              from '../modules/platform-server-sdk/lib/serversdk/index';

@NgModule({

    declarations: [

        AppComponent,
        MenuComponent,
        DashboardComponent,
        SettingsComponent,
        DesktopComponent,
        StatsComponent,
        IBAccountComponent,
        SettingsOverviewComponent

    ],

    imports: [
        
        PlatformServerSDKModule,
        RouterModule.forRoot(routes),

        BrowserModule,
        FormsModule,
        HttpModule, 
        
        NgSemanticModule,
    
    ],
    
    providers: [],
    bootstrap: [AppComponent]
  
})

export class AppModule { }
