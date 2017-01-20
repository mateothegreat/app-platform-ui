import { Routes } from '@angular/router';
import { IBAccountComponent } from './ibaccount/ibaccount.component';
import { SettingsComponent } from './settings.component';

import { SettingsOverviewComponent } from './settings-overview/settings-overview.component';


export const SettingsRoutes: Routes = [
            
    { path: '', component: SettingsOverviewComponent },
    { path: 'ibaccount', component: IBAccountComponent }

]