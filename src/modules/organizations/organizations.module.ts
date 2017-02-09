import { NgModule }                             from '@angular/core';
import { CommonModule }                         from '@angular/common';
import { DataTableModule }                      from './../data-table/data-table.module';
import { OrganizationsComponent }               from './organizations.component';
import { OrganizationsRoutingModule }           from './organizations-routing.module';
import { PlatformServerSDKModule }              from '../platform-server-sdk';

@NgModule({
    
    imports: [
        
        CommonModule,
        PlatformServerSDKModule,
        DataTableModule,
        OrganizationsRoutingModule,
    
    ],
    
    declarations: [ OrganizationsComponent ]
    
})
export class OrganizationsModule { }
