import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DATA_TABLE_DIRECTIVES } from './data-table.directives';
import { DataTableOptionLimitsComponent } from './data-table-option-limits/data-table-option-limits.component';
import { DataTableOptionSearchComponent } from './data-table-option-search/data-table-option-search.component';
// import { DataTableComponent } from './data-table/data-table.component';

@NgModule({
  imports: [
    
    CommonModule,
    
  ],
  declarations: [
    
    ...DATA_TABLE_DIRECTIVES,
    
    DataTableOptionLimitsComponent,
    
    DataTableOptionSearchComponent
    
  ],
  exports: [
    
    ...DATA_TABLE_DIRECTIVES
    
  ]
  
})
export class DataTableModule { }
