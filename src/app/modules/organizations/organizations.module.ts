import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrganizationsRoutingModule } from './organizations-routing.module';
import { OrganizationsComponent } from './organizations.component';
import { DataTableModule } from './../data-table/data-table.module';

@NgModule({
  imports: [
    CommonModule,
    OrganizationsRoutingModule,
    DataTableModule
  ],
  declarations: [OrganizationsComponent]
})
export class OrganizationsModule { }
