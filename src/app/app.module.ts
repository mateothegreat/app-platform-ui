import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Router, Resolve, RouterStateSnapshot,
         ActivatedRouteSnapshot } from '@angular/router';

import { NgSemanticModule } from "../../ngSemantic/ng-semantic"

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { DesktopComponent } from './desktop/desktop.component';
import { StatsComponent } from './dashboard/stats/stats.component';
import { UserComponent } from './user/user.component';
import { SessionComponent } from './user/session/session.component';
import { IBAccountComponent } from './settings/ibaccount/ibaccount.component';

import { routes } from './app.routes';
import { SettingsOverviewComponent } from './settings/settings-overview/settings-overview.component';

@NgModule({

    declarations: [

        AppComponent,
        MenuComponent,
        DashboardComponent,
        SettingsComponent,
        DesktopComponent,
        StatsComponent,
        UserComponent,
        SessionComponent,
        IBAccountComponent,
        SettingsOverviewComponent

    ],

    imports: [
        
        RouterModule.forRoot(routes),

        BrowserModule,
        FormsModule,
        HttpModule, 
        
        NgSemanticModule 
    
    ],
    
    providers: [],
    bootstrap: [AppComponent]
  
})

export class AppModule { }
