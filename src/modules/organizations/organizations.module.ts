import { NgModule }                             from '@angular/core';
import { CommonModule }                         from '@angular/common';
import { DataTableModule }                      from './../data-table/data-table.module';
import { OrganizationsComponent }               from './organizations.component';
import { OrganizationsRoutingModule }           from './organizations-routing.module';
// import { PlatformServerSDKModule }              from '../platform-server-sdk/platform-server-sdk.module';

@NgModule({
    
    imports: [
        
        CommonModule,
        DataTableModule,
        // PlatformServerSDKModule,
        OrganizationsRoutingModule,
    
    ],
    
    declarations: [ OrganizationsComponent ]
    
})
export class OrganizationsModule { }
