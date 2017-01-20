import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { DesktopComponent } from './desktop/desktop.component';
import { StatsComponent } from './dashboard/stats/stats.component';
import { UserComponent } from './user/user.component';
import { SessionComponent } from './user/session/session.component';
import { IBAccountComponent } from './settings/ibaccount/ibaccount.component';

import { SettingsRoutes } from './settings/settings.routes';

export const routes: Routes = [
    
    { path: 'dashboard',  component: DashboardComponent },
    { path: 'settings',   component: SettingsComponent, children: SettingsRoutes },
    { path: 'desktop',   component: DesktopComponent }

//   { path: '**', component: PageNotFoundComponent }

];
