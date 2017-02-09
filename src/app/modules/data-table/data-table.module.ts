import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DATA_TABLE_DIRECTIVES } from './data-table.directives';
// import { DataTableComponent } from './data-table/data-table.component';

@NgModule({
  imports: [
    
    CommonModule,
    
  ],
  declarations: [
    
    ...DATA_TABLE_DIRECTIVES
    
  ],
  exports: [
    
    ...DATA_TABLE_DIRECTIVES
    
  ]
  
})
export class DataTableModule { }
